'use server';

import { headers } from 'next/headers';
import { userAgent as userAgentNext } from 'next/server';

import { get } from 'lodash';

import VehicleError from '@/errors/vehicleError';
import VehicleProtocol from '@/interfaces/vehicleProtocol';

import createToken from './createToken';

interface Props {
  plate: string;
  renavam: string;
  uf: string;
  location?: string;
}

export default async function getVehicle({
  plate,
  renavam,
  uf,
  location,
}: Props) {
  const body = JSON.stringify({ plate, renavam, uf });
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
    const data = await res.json();
    let vehicleData: VehicleProtocol = data.data;
    if (get(vehicleData, 'error', false) && vehicleData.error) {
      const { message } = vehicleData.error;
      throw new VehicleError(message);
    }
    vehicleData = {
      ...vehicleData,
      get amount() {
        const total = this.data.reduce((p, c) => p + c.value, 0);
        return total;
      },
      plate,
      renavam,
      uf,
      location,
      status: 200,
      brandModel: '************',
      category: '************',
      fuel: '************',
      body: '************',
      lastLicensing: '************',
      passengers: '************',
      rangeIPVA: '************',
      species: '************',
      type: '************',
      yearManufacture: '************',
    };

    const token = await createToken(vehicleData);
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
