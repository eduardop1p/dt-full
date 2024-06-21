'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { zodSchema, BodyProtocol } from './validation';

export default function useForm1() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BodyProtocol>({
    resolver: zodResolver(zodSchema),
  });

  const handleFormSubmit: SubmitHandler<BodyProtocol> = async body => {
    console.log(body);
  };

  return { handleSubmit: handleSubmit(handleFormSubmit), register, errors };
}
