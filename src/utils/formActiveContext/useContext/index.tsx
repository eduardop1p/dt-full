'use client';

import { useContext } from 'react';

import { FormActiveContext } from '../context';

export function useFormActiveContext() {
  const { formActive, setFormActive } = useContext(FormActiveContext);

  return { formActive, setFormActive };
}
