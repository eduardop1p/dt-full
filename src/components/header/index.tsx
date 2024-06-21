import Image from 'next/image';

import ExitBtn from './exit';

export default function Header({ date }: { date?: string }) {
  return (
    <header className="flex w-full flex-col pt-2">
      <div className="flex w-full justify-between items-center gap-5 px-1 pb-2 overflow-hidden">
        <div className="flex flex-col">
          <h1 className="text-sm font-sans font-semibold text-red-600 tracking-tight">
            Governo Federal
          </h1>
          <h1 className="text-[20px] font-sans font-semibold text-black opacity-80 leading-none tracking-tight">
            Secretária da fazenda e planejamento
          </h1>
        </div>
        <Image
          src="/assets/imgs/brasaooficialcolorido.png"
          width={140}
          height={140}
          alt="gov"
          className="-mr-[35px]"
        />
      </div>
      <div className="w-full p-2 border-y-[1px] border-solid border-y-black flex gap-8 items-center justify-between">
        <h1 className="text-black font-bold text-lg">
          Consultar licenciamento
        </h1>
        {date ? (
          <h1 className="text-gray-400 font-semibold text-sm leading-none text-right">
            Data da consulta: {date}
          </h1>
        ) : (
          <h1 className="text-black font-bold text-lg leading-none text-right">
            Débitos vinculados ao veículo
          </h1>
        )}
      </div>
      <div className="flex flex-col gap-[2px] mt-[3px] w-full relative">
        <span className="w-full border-b border-solid border-b-red-100"></span>
        <span className="w-full border-b border-solid border-b-red-100"></span>
        <span className="w-full border-b border-solid border-b-red-100"></span>
        <span className="w-full border-b border-solid border-b-red-100"></span>
        <span className="w-full border-b border-solid border-b-red-100"></span>
        <span className="w-full border-b border-solid border-b-red-100"></span>
        <ExitBtn />
      </div>
    </header>
  );
}
