'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import { get } from 'lodash';

import getVehicle from '@/actions/getVehicle';
import navigate from '@/actions/navigate';
import { zodResolver } from '@hookform/resolvers/zod';

import { useLoadingContext } from '../loadingContext/useContext';
import { zodSchema, BodyProtocol } from './validation';

export default function useFormVehicle() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BodyProtocol>({
    resolver: zodResolver(zodSchema),
  });
  const { isLoading, setIsLoading } = useLoadingContext();

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
    setIsLoading(false);
  };

  return { handleSubmit: handleSubmit(handleFormSubmit), register, errors };
}
