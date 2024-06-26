'use client';

import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { get } from 'lodash';

import getVehicle from '@/actions/getVehicle';
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
    const res = await getVehicle(body);
    if (get(res, 'error', false)) {
      setIsLoading(false);
      alert(res.error?.message);
      return;
    }
    const token = res.token as string;
    await navigate(`/veiculo?query=${token}`);
  };

  return { handleSubmit: handleSubmit(handleFormSubmit), register, errors };
}
