'use client';

import Image from 'next/image';

export default function ExitBtn() {
  const handleClick = () => {
    const con = confirm('Deseja realmente sair?');
    if (con) window.open(window.origin, '_self', '')?.close();
  };

  return (
    <button
      className="absolute right-1 cursor-pointer z-[2] -top-1"
      onClick={handleClick}
    >
      <Image src="/assets/imgs/sair.gif" width={25} height={19} alt="sair" />
    </button>
  );
}
