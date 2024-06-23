export default function IPVA() {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-black uppercase text-[13px] font-bold text-left">
        IPVA {new Date().getFullYear()}
      </h2>
      <div className="border border-solid border-black p-1 w-full bg-e6e6e6 flex flex-col">
        <p className="text-[10px] font-semibold text-black ">
          - O pagamento do imposto em atraso estará sujeito aos acréscimos
          legais (multa e juros de mora conforme Lei nº 13.296/2008, artigo 28);
        </p>
        <p className="text-[10px] font-semibold text-black ">
          - O não pagamento do imposto motivará a inclusão do débito no Cadastro
          Informativo de Créditos não Quitados de Órgãos e Entidades Estaduais
          (CADIN ESTADUAL) nos termos da Lei nº 12.799/2008.
        </p>
      </div>
    </div>
  );
}
