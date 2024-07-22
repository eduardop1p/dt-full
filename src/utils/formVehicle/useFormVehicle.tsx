'use client';

import { FormEvent, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { get } from 'lodash';

import getVehiclePlate from '@/actions/getVehiclePlate';
import navigate from '@/actions/navigate';
import getClientLocation from '@/functions/getClientLocation';
import { zodResolver } from '@hookform/resolvers/zod';

import { useLoadingContext } from '../loadingContext/useContext';
import { zodSchema, BodyProtocol } from './validation';

export default function useFormVehicle() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<BodyProtocol>({
    resolver: zodResolver(zodSchema),
    defaultValues: { location: 'Indisponivel' },
  });
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    getClientLocation().then(res => {
      if (res)
        setValue('location', `${res.city}, ${res.region} - ${res.country}`);
    });
  }, [setValue]);

  const handleFormSubmit: SubmitHandler<BodyProtocol> = async body => {
    if (isLoading) return;
    setIsLoading(true);
    const res = await getVehiclePlate(body);
    if (get(res, 'error', false)) {
      setIsLoading(false);
      alert(res.error?.message);
      return;
    }
    const token = res.token as string;
    await navigate(`/veiculo?query=${token}`);
  };

  const handleInputPlate = (event: FormEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget;
    let value = currentTarget.value;
    value = value.replace(/[^a-zA-Z0-9]/g, '');

    currentTarget.value = value;
  };

  const handleInputRenavam = (event: FormEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget;
    let value = currentTarget.value;
    value = value.replace(/[^0-9]/g, '');

    currentTarget.value = value;
  };

  return {
    handleSubmit: handleSubmit(handleFormSubmit),
    register,
    errors,
    handleInputPlate,
    handleInputRenavam,
  };
}
