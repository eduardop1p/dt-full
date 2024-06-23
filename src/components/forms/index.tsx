'use client';

import FormSP from './formSP';

export default function Forms() {
  return (
    <div className="max-w-[595px] w-[85%] h-[172px] border border-solid border-black bg-e6e6e6 mx-auto pt-2 px-4 pb-1 flex flex-col">
      <h2 className="text-center text-[13px] text-333333 font-bold leading-none">
        Identificação do Veículo
      </h2>
      <FormSP />
    </div>
  );
}
