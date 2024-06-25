'use client';

import useformVehicle from '@/utils/formVehicle/useFormVehicle';

import Input from '../input';
import InputUF from '../inputUF';

export default function FormVehicle() {
  const { handleSubmit, register, errors } = useformVehicle();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-5 w-full h-full items-center gap-4 relative"
    >
      <InputUF errors={errors} label="Estado" name="uf" register={register} />
      <Input
        errors={errors}
        label="Renavam"
        name="renavam"
        register={register}
      />
      <Input errors={errors} label="Placa" name="plate" register={register} />
      <button
        type="submit"
        className="text-[10px] bg-efefef font-normal text-black hover:bg-e6e6e6 text-center mt-5 w-[143px] h-[18px] border border-solid border-333333 rounded-sm"
      >
        Consultar
      </button>
    </form>
  );
}
