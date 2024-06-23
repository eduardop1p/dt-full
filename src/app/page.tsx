import Image from 'next/image';

import Footer from '@/components/footer';
import Forms from '@/components/forms';
import Header from '@/components/header';

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-[900px] w-[90%] mx-auto my-[80px] flex flex-col">
          <Forms />
          <div className="w-full mt-[52px] border-y border-solid border-black py-2 flex flex-col items-center gap-3">
            <h2 className="text-lg font-bold text-black text-center leading-none">
              Pagamento do seu IPVA anual
            </h2>
            <p className="text-center text-base font-normal text-black">
              Clique <span className="underline text-red-600">aqui</span> e veja
              como é prático manter o IPVA do seu veículo atualizado. Para saber
              mais sobre essa facilidade de pagamento clique{' '}
              <span className="underline text-red-600">aqui</span>.
            </p>
          </div>
          <Image
            src="/assets/imgs/ipva.jpeg"
            alt="ipva"
            sizes="100%"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={400}
            height={200}
            className="mt-[55px] mx-auto !max-w-[595px]"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
