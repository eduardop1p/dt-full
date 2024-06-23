export default function ImportantObservations() {
  return (
    <div className="border border-solid border-black p-1 w-full bg-e6e6e6 flex flex-col">
      <h2 className="text-black uppercase text-[13px] font-bold text-center">
        OBSERVAÇÕES IMPORTANTES
      </h2>
      <div className="w-full flex flex-col items-start">
        <p className="text-333333 font-normal text-[10px]">
          {`1)`} Proprietário, caso algum dado do veículo esteja incorreto,
          procure uma unidade do Detran para regularização.
        </p>
        <p className="text-333333 font-normal text-[10px]">
          {`2)`} Não deixe de comunicar ao órgão de trânsito, no prazo de até 30
          (trinta) dias:
        </p>
        <p className="text-333333 font-normal text-[10px]">
          - o seu novo endereço, ainda que dentro do mesmo município;
        </p>
        <p className="text-333333 font-normal text-[10px]">
          - a venda de seu veículo ou a transferência para a seguradora em caso
          de indenização.
        </p>
      </div>
    </div>
  );
}
