import VehicleProtocol from '@/interfaces/vehicleProtocol';

interface Props {
  vehicleData: VehicleProtocol;
}

export default function Vehicle({ vehicleData }: Props) {
  const {
    renavam,
    plate,
    brandModel,
    rangeIPVA,
    yearManufacture,
    city,
    fuel,
    species,
    category,
    type,
    passengers,
    body,
    lastLicensing,
  } = vehicleData;

  return (
    <div className="w-full flex flex-col">
      <h2 className="text-black uppercase text-[13px] font-bold text-left">
        VEÍCULO
      </h2>
      <div className="border border-solid border-black p-4 w-full bg-e6e6e6 flex flex-col">
        <div className="w-full mx-auto max-w-[700px] flex flex-col gap-2">
          <div className="flex w-full justify-between items-center gap-8">
            <p className="text-333333 font-bold text-[10px]">
              Renavam: <span className="font-normal">{renavam}</span>
            </p>
            <p className="text-333333 font-bold text-[10px]">
              Placa: <span className="font-normal">{plate}</span>
            </p>
          </div>
          <div className="flex w-full justify-between items-center gap-8">
            <p className="text-333333 font-bold text-[10px]">
              Município: <span className="font-normal">{city}</span>
            </p>
            <p className="text-333333 font-bold text-[10px]">
              Categoria: <span className="font-normal">{category}</span>
            </p>
          </div>
          <div className="flex w-full justify-between items-center gap-8">
            <p className="text-333333 font-bold text-[10px]">
              Marca / Modelo: <span className="font-normal">{brandModel}</span>
            </p>
            <p className="text-333333 font-bold text-[10px]">
              Tipo: <span className="font-normal">{type}</span>
            </p>
          </div>
          <div className="flex w-full justify-between items-center gap-8">
            <p className="text-333333 font-bold text-[10px]">
              Faixa do IPVA: <span className="font-normal">{rangeIPVA}</span>
            </p>
            <p className="text-333333 font-bold text-[10px]">
              Passageiros: <span className="font-normal">{passengers}</span>
            </p>
          </div>
          <div className="flex w-full justify-between items-center gap-8">
            <p className="text-333333 font-bold text-[10px]">
              Ano de Fabricação:{' '}
              <span className="font-normal">{yearManufacture}</span>
            </p>
            <p className="text-333333 font-bold text-[10px]">
              Carroceria: <span className="font-normal">{body}</span>
            </p>
          </div>
          <div className="flex w-full justify-between items-center gap-8">
            <p className="text-333333 font-bold text-[10px]">
              Espécie: <span className="font-normal">{species}</span>
            </p>
            <p className="text-333333 font-bold text-[10px]">
              Último Licenciamento:{' '}
              <span className="font-normal">{lastLicensing}</span>
            </p>
          </div>
          <div className="flex w-full justify-between items-center gap-8">
            <p className="text-333333 font-bold text-[10px]">
              Combustível: <span className="font-normal">{fuel}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
