'use client';

import useFormSP from '@/utils/formSP/useFormSP';

import Input from '../input';

export default function FormSP() {
  const { handleSubmit, register, errors } = useFormSP();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-5 w-full h-full items-center gap-6 relative"
    >
      <Input
        errors={errors}
        label="Renavam"
        name="renavam"
        register={register}
      />
      <Input errors={errors} label="Placa" name="plate" register={register} />
      <button
        type="submit"
        className="text-[10px] bg-efefef font-normal text-black hover:bg-e6e6e6 text-center absolute bottom-0 w-[143px] h-[18px] border border-solid border-333333 rounded-sm"
      >
        Consultar
      </button>
    </form>
  );
}
