'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import { get } from 'lodash';

import { getVehicleSP } from '@/actions/getVehicleSP';
import navigate from '@/actions/navigate';
import { zodResolver } from '@hookform/resolvers/zod';

import { useLoadingContext } from '../loadingContext/useContext';
import { zodSchema, BodyProtocol } from './validation';

export default function useFormSP() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BodyProtocol>({
    resolver: zodResolver(zodSchema),
  });
  const { setIsLoading } = useLoadingContext();

  const handleFormSubmit: SubmitHandler<BodyProtocol> = async body => {
    setIsLoading(true);
    const res = await getVehicleSP(body);
    if (get(res, 'error', false)) {
      setIsLoading(false);
      alert(res.error?.message);
      return;
    }
    const token = res.token;
    await navigate(`/veiculo?query=${token}`);
    setIsLoading(false);
  };

  return { handleSubmit: handleSubmit(handleFormSubmit), register, errors };
}
