export default function OtherInformation() {
  return (
    <div className="w-full flex flex-col bg-white">
      <h2 className="text-white uppercase text-[13px] font-bold text-center w-full bg-808080">
        OUTRAS INFORMAÇÕES
      </h2>
      <div className="w-full border-x border-b border-solid border-black bg-transparent">
        <div className="flex flex-col px-2 py-4">
          <h2 className="uppercase text-[10px] font-bold text-black">
            TAXA DE LICENCIAMENTO
          </h2>
          <p className="text-[10px] font-normal text-black mb-4">
            O vencimento normal da Taxa de Licenciamento varia de acordo com o
            escalonamento fixado pelo Detran.
          </p>
          <h2 className="uppercase text-[10px] font-bold text-black">
            LICENCIAMENTO ANTECIPADO
          </h2>
          <p className="text-[10px] font-normal text-black mb-4">
            O pagamento da Taxa de Licenciamento do exercício corrente somente
            poderá ser antecipado e efetuado junto com o IPVA desde que tenham
            sido recolhidos todos os débitos existentes referentes ao
            licenciamento do exercício anterior, IPVA, seguro DPVAT integral e
            multas de trânsito. A antecipação do licenciamento será permitida
            quando não houver restrições administrativas (tais como gravames,
            falta de inspeção veicular quando exigida, medida judicial, entre
            outras) no cadastro do Detran
          </p>
          <p className="text-[10px] font-normal text-black mb-4">
            A opção pelo licenciamento antecipado pode ser feita até a data do
            vencimento da quinta parcela do IPVA.
          </p>
          <p className="text-[10px] font-normal text-black mb-4">
            Após o pagamento da taxa de licenciamento no sistema bancário, o
            download e a impressão do CRLV estarão disponíveis no portal do
            Detran., no aplicativo “CDT - Carteira Digital de Trânsito” do
            governo federal e ainda no portal de serviços do Senatran.{' '}
          </p>
          <h2 className="uppercase text-[10px] font-bold text-black">
            CENTRAL DE ATENDIMENTO - IPVA
          </h2>
          <p className="text-[10px] font-normal text-black">
            0800-0170110 (exclusivo para telefone fixo)
          </p>
          <p className="text-[10px] font-normal text-black mb-4">
            (11)2450-6810 (exclusivo para telefone móvel)
          </p>
          <p className="text-[10px] font-normal text-black mb-2">
            Nossa estrutura de atendimento telefônico atua em duas modalidades:
          </p>
          <ul className="list-disc ml-[14px] mb-2">
            <li className="text-[10px] font-normal text-black">
              Atendimento humano: de segunda a sexta-feira das 8 às 19 horas;
            </li>
            <li className="text-[10px] font-normal text-black">
              Atendimento eletrônico: disponibiliza informações 24 horas,
              inclusive aos sábados, domingos e feriados.{' '}
            </li>
          </ul>
          <p className="text-[10px] font-normal text-black">
            Correio Eletrônico: clique{' '}
            <span className="underline text-red-600 font-semibold">aqui</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
