'use server';

import jwt from 'jsonwebtoken';

import VehicleProtocol from '@/interfaces/vehicleProtocol';

export default async function getDataToken(
  token: string
): Promise<VehicleProtocol | null> {
  try {
    const data = jwt.decode(token) as VehicleProtocol;
    return data;
  } catch {
    return null;
  }
}
