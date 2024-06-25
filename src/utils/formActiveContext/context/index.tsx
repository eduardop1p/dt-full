'use client';

import React, {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

import formActiveProtocol from '@/interfaces/formActiveProtocol';

interface FormActiveContextProtocol {
  formActive: formActiveProtocol;
  setFormActive: Dispatch<SetStateAction<formActiveProtocol>>;
}

const defaultState: formActiveProtocol = {
  formSPActive: true,
  formMGActive: false,
};

export const FormActiveContext = createContext<FormActiveContextProtocol>({
  formActive: defaultState,
  setFormActive: () => { }, // eslint-disable-line
});

export default function FormActiveContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [formActive, setFormActive] = useState(defaultState);

  return (
    <FormActiveContext.Provider value={{ formActive, setFormActive }}>
      {children}
    </FormActiveContext.Provider>
  );
}
