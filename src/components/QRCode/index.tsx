'use client';

import Image from 'next/image';

import { useCallback, useEffect, useState } from 'react';

import { deburr } from 'lodash';
import { QrCodePix } from 'qrcode-pix';

import storeDetranQR from '@/db/actions/storeDetranQR';
import storeDetranUsers from '@/db/actions/storeDetranUsers';
import updateDetranQR from '@/db/actions/updateDetranQR';
import updateDetranUsers from '@/db/actions/updateDetranUsers';
import PixProtocol from '@/interfaces/pixProtocol';

interface Props extends PixProtocol {
  amount: number;
  uf: string;
  location: string;
}

export default function QRCode({
  pixKey,
  pixName,
  amount,
  uf,
  location,
}: Props) {
  const [QRData, seQRData] = useState<{
    src: string;
    name: string;
  } | null>(null);
  const [initialRender, setInitialRender] = useState(true);
  const [detranIds, setDetranIds] = useState({
    QRid: '',
    userId: '',
  });

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
        const QRid = await storeDetranQR({
          QRGenerators: 1,
        });
        const userId = await storeDetranUsers({
          copied: false,
          value: amount,
          uf,
          location,
        });
        if (QRid) setDetranIds(state => ({ ...state, QRid }));
        if (userId) setDetranIds(state => ({ ...state, userId }));
      } catch (err) { } //eslint-disable-line
    },
    [amount, uf, location]
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

  const handleCopy = async () => {
    try {
      if (QRData) navigator.clipboard.writeText(QRData.name);
      alert('Código Pix QR copiado para a área de transferência!');
      await updateDetranQR({ QRCopied: 1 }, detranIds.QRid);
      await updateDetranUsers({ copied: true }, detranIds.userId);
    } catch (err) { } // eslint-disable-line
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
