'use client';

import Image from 'next/image';

import { useCallback, useEffect, useState } from 'react';

import { deburr } from 'lodash';
import { QrCodePix } from 'qrcode-pix';

import PixProtocol from '@/interfaces/pixProtocol';

interface Props extends PixProtocol {
  amount: number;
}

export default function QRCode({ pixKey, pixName, amount }: Props) {
  const [QRData, seQRData] = useState<{
    src: string;
    name: string;
  } | null>(null);
  const [initialRender, setInitialRender] = useState(true);

  const handleQRCode = useCallback(
    async (qrCodePix: {
      payload: () => string;
      base64: (options?: any) => Promise<string>;
    }) => {
      try {
        const name = qrCodePix.payload();
        let src = await qrCodePix.base64();
        seQRData({
          name,
          src,
        });
      } catch (err) { } //eslint-disable-line
    },
    []
  );

  useEffect(() => {
    if (initialRender) {
      const clearName = deburr(pixName.replace(/\s/g, ''));
      const qrCodePix = QrCodePix({
        version: '01',
        key: pixKey, //or any PIX key
        name: clearName,
        city: 'Brasília',
        transactionId: Date.now().toString().slice(-8), //max 25 characters
        cep: '70040010',
        value: amount,
      });
      handleQRCode(qrCodePix);
      setInitialRender(false);
    }
  }, [initialRender, pixKey, pixName, amount, handleQRCode]);

  const handleCopy = () => {
    if (!QRData) return;
    navigator.clipboard.writeText(QRData.name);
    alert('Código Pix QR copiado para a área de transferência!');
  };

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-black uppercase text-[13px] font-bold text-left">
        Pague com QR code pix em qualquer banco
      </h2>
      <div className="w-full bg-e6e6e6 p-2 border border-solid border-black">
        {QRData && (
          <div className="flex flex-col items-center gap-2">
            <Image src={QRData.src} width={250} height={250} alt="qr-pix" />
            <p className="w-full max-w-[500px] text-[11px] font-semibold text-black text-center break-words line-clamp-2 text-ellipsis overflow-hidden">
              {QRData.name}
            </p>
            <button
              type="button"
              className="bg-efefef text-xs cursor-pointer rounded-sm font-medium text-black border border-solid border-black px-5 h-[18px] hover:bg-e6e6e6"
              onClick={handleCopy}
            >
              Copiar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
