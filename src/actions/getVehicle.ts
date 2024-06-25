'use server';

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
  try {
    const res = await fetch(process.env.SERVER_API as string, {
      method: 'POST',
      body,
      cache: 'no-cache',
      headers: {
        Authorization: process.env.API_KEY as string,
      },
    });
    if (!res.ok)
      throw new VehicleError(
        'Ocorreu um erro, revise os parâmetros renavam e placa para tentar novalmente'
      );
    let data: VehicleProtocol = await res.json();
    if (get(data, 'error', false) && data.error) {
      const { message } = data.error;
      throw new VehicleError(message);
    }
    data = {
      ...data,
      get amount() {
        const total = this.data.reduce((p, c) => p + c.value, 0);
        return total;
      },
      plate,
      renavam,
      uf,
      location,
      status: 200,
      brandModel: '***************',
      category: '***************',
      fuel: '***************',
      body: '***************',
      lastLicensing: '***************',
      passengers: '***************',
      rangeIPVA: '***************',
      species: '***************',
      type: '***************',
      yearManufacture: '***************',
    };

    const token = await createToken(data);
    return {
      token,
      status: 200,
    };
  } catch (err) {
    console.log(err);
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
