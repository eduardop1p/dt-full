'use client';

import React, {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

import getDataToken from '@/actions/getDataToken';

interface VehicleEncryptedContextProtocol {
  vehicleEncrypted: string;
  setVehicleEncrypted: Dispatch<SetStateAction<string>>;
}

export const VehicleEncryptedContext =
  createContext<VehicleEncryptedContextProtocol>({
    vehicleEncrypted: '',
    setVehicleEncrypted: () => { }, // eslint-disable-line
  });

export default function VehicleEncryptedContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [vehicleEncrypted, setVehicleEncrypted] = useState(() => {
    const savedState = localStorage.getItem('vehicle-encrypted');
    return savedState ? JSON.parse(savedState) : '';
  });

  useEffect(() => {
    try {
      let isValidEncrypted = false;
      getDataToken(vehicleEncrypted).then(res => (isValidEncrypted = !!res));
      if (!isValidEncrypted) throw new Error('Invalid encrypted data');

      localStorage.setItem(
        'vehicle-encrypted',
        JSON.stringify(vehicleEncrypted)
      );
    } catch (err) {
      localStorage.setItem('vehicle-encrypted', JSON.stringify(''));
      setVehicleEncrypted('');
    }
  }, [vehicleEncrypted]);

  return (
    <VehicleEncryptedContext.Provider
      value={{ vehicleEncrypted, setVehicleEncrypted }}
    >
      {children}
    </VehicleEncryptedContext.Provider>
  );
}
