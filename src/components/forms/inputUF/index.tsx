'use client';

import { FieldErrors, UseFormRegister } from 'react-hook-form';

import ErrorMsg from '../errorMsg';

interface Props {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  className?: string;
}

export default function Input({ label, name, register, errors }: Props) {
  const error = errors[name];

  return (
    <div className="flex items-start gap-12">
      <label htmlFor={name} className="text-[10px] font-normal text-333333">
        {label}:
      </label>
      <div className="flex flex-col gap-[2px]">
        <input
          type="text"
          id={name}
          {...register(name)}
          className="max-w-[152px] flex-none w-full h-[18px] rounded-sm focus:outline-1 focus:outline focus:outline-black border border-333333 border-solid text-[10px] py-[1px] px-[2px]"
        />
        {error && <ErrorMsg>{error.message}</ErrorMsg>}
      </div>
    </div>
  );
}
