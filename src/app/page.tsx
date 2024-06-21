import Footer from '@/components/footer';
import Forms from '@/components/forms';
import Header from '@/components/header';

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-[900px] w-[90%] mx-auto my-[75px] flex flex-col">
          <Forms />
        </div>
      </main>
      <Footer />
    </>
  );
}
