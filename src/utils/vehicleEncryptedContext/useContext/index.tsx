'use client';

import { useContext } from 'react';

import { VehicleEncryptedContext } from '../context';

export function useVehicleEncryptedContext() {
  const { vehicleEncrypted, setVehicleEncrypted } = useContext(
    VehicleEncryptedContext
  );

  return { vehicleEncrypted, setVehicleEncrypted };
}
