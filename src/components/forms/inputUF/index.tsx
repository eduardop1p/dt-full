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

export default function InputUF({ label, name, register, errors }: Props) {
  const error = errors[name];

  return (
    <div className="flex items-start gap-12 flex-none">
      <label htmlFor={name} className="text-[10px] font-normal text-333333">
        {label}:
      </label>
      <div className="flex flex-col gap-[2px] flex-none max-w-[140px] w-full">
        <select
          {...register('uf')}
          className="text-[10px] bg-efefef font-normal text-black text-left flex-none w-full h-[18px] border border-solid border-333333 rounded-sm"
          defaultValue="São Paulo"
        >
          <option value="Acre">Acre</option>
          <option value="Alagoas">Alagoas</option>
          <option value="Amapá">Amapá</option>
          <option value="Amazonas">Amazonas</option>
          <option value="Bahia">Bahia</option>
          <option value="Ceará">Ceará</option>
          <option value="Distrito Federal">Distrito Federal</option>
          <option value="Espírito Santo">Espírito Santo</option>
          <option value="Goiás">Goiás</option>
          <option value="Maranhão">Maranhão</option>
          <option value="Mato Grosso">Mato Grosso</option>
          <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
          <option value="Minas Gerais">Minas Gerais</option>
          <option value="Pará">Pará</option>
          <option value="Paraíba">Paraíba</option>
          <option value="Paraná">Paraná</option>
          <option value="Pernambuco">Pernambuco</option>
          <option value="Piauí">Piauí</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Rio Grande do Norte">Rio Grande do Norte</option>
          <option value="Rio Grande do Sul">Rio Grande do Sul</option>
          <option value="Rondônia">Rondônia</option>
          <option value="Roraima">Roraima</option>
          <option value="Santa Catarina">Santa Catarina</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Sergipe">Sergipe</option>
          <option value="Tocantins">Tocantins</option>
        </select>
        {error && <ErrorMsg>{error.message}</ErrorMsg>}
      </div>
    </div>
  );
}
