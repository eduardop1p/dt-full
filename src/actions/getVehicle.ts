'use server';

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
    });
    if (!res.ok)
      throw new VehicleError(
        'Ocorreu um erro, revise os parâmetros renavam e placa'
      );
    let data = await res.json();
    const newData: VehicleProtocol = {
      amount: data.normalizado_valor_total_debitos,
      plate: data.placa,
      renavam: data.renavam,
      brandModel: data.marca,
      city: data.municipio,
      category: data.categoria,
      fuel: data.combustivel,
      body: data.carroceria,
      lastLicensing: data.ultimo_lancamento,
      passengers: data.passageiros,
      rangeIPVA: data.faixa_ipva,
      species: data.especie,
      type: data.tipo,
      yearManufacture: data.ano_fabricacao,
      uf,
      location,
    };
    const token = await createToken(newData);
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
