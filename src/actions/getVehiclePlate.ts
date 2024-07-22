'use server';

import { headers } from 'next/headers';
import { userAgent as userAgentNext } from 'next/server';

import { get } from 'lodash';

import VehicleError from '@/errors/vehicleError';
import VehicleDebtsProtocol from '@/interfaces/vehicleDebtsProtocol';
import VehicleProtocol from '@/interfaces/vehicleProtocol';

import createToken from './createToken';

interface Props {
  plate: string;
  renavam: string;
  location?: string;
}

export default async function getVehiclePlate({
  plate,
  renavam,
  location,
}: Props) {
  const body = JSON.stringify({ plate, renavam });
  const userAgent = userAgentNext({ headers: headers() }).ua;
  try {
    const res = await fetch(process.env.SERVER_API as string, {
      method: 'POST',
      body,
      cache: 'no-cache',
      headers: {
        Authorization: process.env.API_KEY as string,
        'Content-Type': 'application/json',
        'User-Agent': userAgent,
      },
    });
    if (!res.ok)
      throw new VehicleError(
        'Ocorreu um erro, revise os parâmetros renavam e placa para tentar novalmente'
      );
    const { data } = await res.json();
    let vehicleData: VehicleDebtsProtocol = data;
    if (get(vehicleData, 'error', false) && vehicleData.error) {
      const { message } = vehicleData.error;
      throw new VehicleError(message);
    }

    const newVehicleData: VehicleProtocol = {
      plate,
      renavam,
      location,
      uf: vehicleData.data.filter(item => item.title === 'UF')[0].value,
      amount: vehicleData.amount,
      data: vehicleData.data,
    };
    const token = await createToken(newVehicleData);
    return {
      token,
      status: 200,
    };
  } catch (err) {
    // console.log(err);
    if (err instanceof VehicleError) {
      return {
        error: {
          message: err.message,
        },
        status: 400,
      };
    }
    return {
      error: {
        message: 'Ocorreu um erro desconhecido, por favor tente novalmente',
      },
      status: 502,
    };
  }
}
