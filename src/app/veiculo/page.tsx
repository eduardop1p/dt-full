import Link from 'next/link';
import { redirect } from 'next/navigation';

import getDataToken from '@/actions/getDataToken';
import getPix from '@/actions/getPix';
import Attention from '@/components/attention';
import Debts from '@/components/debts';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ImportantObservations from '@/components/importantObservations';
import IPVA from '@/components/ipva';
import OtherInformation from '@/components/otherInformation';
import QRCode from '@/components/QRCode';
import TotalDebts from '@/components/totalDebts';
import Vehicle from '@/components/vehicle';
import PixProtocol from '@/interfaces/pixProtocol';

interface Props {
  searchParams: { query: string };
}

export default async function Page({ searchParams }: Props) {
  const pixtData: PixProtocol | null = await getPix();
  if (!pixtData)
    return (
      <p className="text-black py-2 text-center font-normal text-sm">
        Ocorreu um erro, por favor recarregue a página
      </p>
    );

  const { query } = searchParams;
  const vehicleData = await getDataToken(query);
  if (!vehicleData) redirect('/');

  const { amount, uf, location } = vehicleData;
  const { pixName, pixKey } = pixtData;
  const date = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo', // Definindo o fuso horário para o Brasil
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // Usar formato de 24 horas
  });

  return (
    <>
      <Header date={date} />
      <main className="w-full bg-white min-h-screen pt-6 pb-10">
        <div className="w-[90%] mx-auto max-w-[935px] flex flex-col gap-6 items-center">
          <ImportantObservations />
          <Vehicle vehicleData={vehicleData} />
          <Attention />
          <Debts debts={vehicleData.data} />
          <TotalDebts amount={amount} />
          <QRCode
            pixName={pixName}
            pixKey={pixKey}
            amount={amount}
            uf={uf}
            location={location}
          />
          <IPVA />
          <OtherInformation />
          <div className="flex items-center gap-4 justify-between w-full">
            <Link
              href="/"
              className="bg-efefef text-xs cursor-pointer rounded-sm font-medium text-black border border-solid border-black px-5 h-[18px] hover:bg-e6e6e6"
            >
              Voltar
            </Link>
            <button
              type="button"
              className="bg-efefef text-xs cursor-pointer rounded-sm font-medium text-black border border-solid border-black px-5 h-[18px] hover:bg-e6e6e6"
            >
              Imprimir
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
