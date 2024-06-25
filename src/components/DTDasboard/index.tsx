'use client';

import { useEffect, useState } from 'react';

import findAllDetranQR from '@/db/actions/findAllDetranQR';
import findAllDetranUsers from '@/db/actions/findAllDetranUsers';
import DetranQRsProtocol from '@/interfaces/detranQRsProtocol';
import DetranUsersProtocol from '@/interfaces/detranUsersProtocol';
import formatPrice from '@/services/formatPrice';

interface Props {
  dataDetranQR: DetranQRsProtocol;
  dataDetranUsers: DetranUsersProtocol[];
}

export default function DTDasboard({ dataDetranQR, dataDetranUsers }: Props) {
  const [stDataDetranQR, setStDataDetranQR] = useState(dataDetranQR);
  const [stDataDetranUsers, setStDataDetranUsers] = useState(dataDetranUsers);
  const totalValues = stDataDetranUsers.reduce((p, n) => {
    const value = n.value ?? 0;
    return p + value;
  }, 0);
  const totalValuesCopied = stDataDetranUsers.reduce((p, n) => {
    const value = n.value ?? 0;
    if (n.copied) {
      return p + value;
    }
    return p;
  }, 0);

  useEffect(() => {
    const timeId = setInterval(async () => {
      const newDataDetranQR = await findAllDetranQR();
      const newDataDetranUsers = await findAllDetranUsers();
      if (newDataDetranQR) {
        setStDataDetranQR(newDataDetranQR);
      }
      if (newDataDetranUsers) {
        setStDataDetranUsers(newDataDetranUsers);
      }
    }, 2000);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full flex justify-center items-center h-[44px] bg-black">
          <div className="uppercase text-white px-2 font-medium text-sm text-center w-full">
            Total qrs gerados
          </div>
          <div className="bg-gray-300 w-[1px] h-full" />
          <div className="uppercase text-white px-2 font-medium text-sm text-center w-full">
            Total qrs copiados
          </div>
          <div className="bg-gray-300 w-[1px] h-full" />
          <div className="uppercase text-white px-2 font-medium text-sm text-center w-full">
            Total copiados em R$
          </div>
          <div className="bg-gray-300 w-[1px] h-full" />
          <div className="uppercase text-white px-2 font-medium text-sm text-center w-full">
            Total em R$
          </div>
        </div>
        <div className="w-full flex justify-center items-center h-[44px] bg-white bg-transparent border-x border-solid border-black border-b">
          <div className="text-black font-medium text-sm text-center line-clamp-2 text-ellipsis w-full px-2">
            {stDataDetranQR.totalQRGenerators}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <div className="text-black font-medium text-sm text-center line-clamp-2 text-ellipsis w-full px-2">
            {stDataDetranQR.totalQRCopied}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <div className="text-black font-medium text-sm text-center line-clamp-2 text-ellipsis w-full px-2">
            {formatPrice(totalValuesCopied)}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <div className="text-black font-medium text-sm text-center line-clamp-2 text-ellipsis w-full px-2">
            {formatPrice(totalValues)}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="w-full flex justify-center items-center h-[44px] bg-black">
          <div className="uppercase text-white px-2 font-medium text-sm text-center w-full">
            Id
          </div>
          <div className="bg-gray-300 w-[1px] h-full" />
          <div className="uppercase text-white px-2 font-medium text-sm text-center w-full">
            Valor
          </div>
          <div className="bg-gray-300 w-[1px] h-full" />
          <div className="uppercase text-white px-2 font-medium text-sm text-center w-full">
            Horário
          </div>
          <div className="bg-gray-300 w-[1px] h-full" />
          <div className="uppercase text-white px-2 font-medium text-sm text-center w-full">
            Copiado
          </div>
        </div>
        {stDataDetranUsers.map((val, i) => (
          <div
            key={i}
            className="w-full flex justify-center items-center h-[44px] bg-white bg-transparent border-x border-solid border-black border-b"
          >
            <div className="text-black font-medium text-sm text-center line-clamp-2 text-ellipsis w-full px-2">
              {stDataDetranUsers.length - i}
            </div>
            <div className="bg-black w-[1px] h-full" />
            <div className="text-black font-medium text-sm text-center line-clamp-2 text-ellipsis w-full px-2">
              {formatPrice(val.value ?? 0)}
            </div>
            <div className="bg-black w-[1px] h-full" />
            <div className="text-black font-medium text-sm text-center line-clamp-2 text-ellipsis w-full px-2">
              {val.createdIn &&
                new Date(val.createdIn).toLocaleString('pt-BR', {
                  timeStyle: 'short',
                  dateStyle: 'long',
                  timeZone: 'America/Sao_Paulo',
                  hour12: false,
                })}
            </div>
            <div className="bg-black w-[1px] h-full" />
            <div
              className={`${val.copied ? 'text-green-500' : 'text-red-500'} font-medium text-sm text-center line-clamp-2 text-ellipsis w-full px-2`}
            >
              {val.copied ? 'Sim' : 'Não'}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
