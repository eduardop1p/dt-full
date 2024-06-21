export default function Footer() {
  return (
    <footer className="flex flex-col gap-[2px]">
      <div className=" border-b border-b-CCCCCC border-solid w-full text-right pr-1 text-[11px] font-bold text-red-500">
        Versão <span className="underline">em desenvolvimento</span>: 1.01.2
      </div>
      <p className="w-full py-[2px] bg-f0f0f0 text-[10px] font-semibold text-center text-black ">
        Secretaria da Fazenda e Planejamento do Estado de São Paulo - Av. Rangel
        Pestana,300 - São Paulo - SP - Cep 01017-911 - PABX (11)3243-3400
      </p>
    </footer>
  );
}
