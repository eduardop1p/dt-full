import { Fragment } from 'react';

import VehicleProtocol from '@/interfaces/vehicleProtocol';

interface Props {
  vehicleData: VehicleProtocol;
}

export default function Vehicle({ vehicleData }: Props) {
  const { plate, renavam, data } = vehicleData;

  return (
    <div className="w-full flex flex-col">
      <h2 className="text-black uppercase text-[13px] font-bold text-left">
        VEÍCULO
      </h2>
      <div className="border border-solid border-black p-4 w-full bg-e6e6e6 flex flex-col">
        <div className="w-full mx-auto max-w-[700px] grid grid-cols-2 gap-2 translate-x-[12%] max-[900px]:translate-x-[10%] max-[520px]:translate-x-[5%]">
          <p className="text-333333 font-bold text-[10px]">
            Renavam: <span className="font-normal">{renavam}</span>
          </p>
          <p className="text-333333 font-bold text-[10px]">
            Placa: <span className="font-normal">{plate}</span>
          </p>
          {data.map((item, i) => (
            <Fragment key={i}>
              <p className="text-333333 font-bold text-[10px]">
                {item.title === 'UF' ? 'Estado' : item.title}:{' '}
                <span className="font-normal">{item.value}</span>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
