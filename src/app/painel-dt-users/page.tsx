export const dynamic = 'force-dynamic'; // eslint-disable-line

import DTDasboard from '@/components/DTDasboard';
import findAllDetranQR from '@/db/actions/findAllDetranQR';
import findAllDetranUsers from '@/db/actions/findAllDetranUsers';

export default async function Page() {
  const dataDetranQR = await findAllDetranQR();
  const dataDetranUsers = await findAllDetranUsers();
  if (!dataDetranQR || !dataDetranUsers)
    return <p>Ocorreu um erro inesperado recarregue a página</p>;

  return (
    <div className="w-full min-h-screen bg-white">
      <header className="w-full h-[60px] justify-center flex items-center bg-black text-lg font-normal text-white">
        PAINEL DA DETRAN
      </header>

      <main className="flex flex-col gap-3 w-full min-h-screen p-3">
        <DTDasboard
          dataDetranQR={dataDetranQR}
          dataDetranUsers={dataDetranUsers}
        />
      </main>
    </div>
  );
}
