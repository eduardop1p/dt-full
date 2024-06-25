// 'use server';

// import { get } from 'lodash';

// import VehicleError from '@/errors/vehicleError';
// import VehicleProtocol from '@/interfaces/vehicleProtocol';

// import createToken from './createToken';

// interface Props {
//   plate: string;
//   renavam: string;
//   uf: string;
//   location?: string;
// }

// export async function getVehicleSP({ plate, renavam, uf, location }: Props) {
//   try {
//     const res = await fetch(
//       `https://api.gw.cellereit.com.br/consultas/sefaz/sp/debitos-veiculo?placa=${plate}&renavam=${renavam}`,
//       {
//         method: 'GET',
//         cache: 'no-cache',
//         headers: {
//           Authorization: `Bearer ${process.env.API_KEY_GW}`,
//         },
//       }
//     );
//     if (!res.ok)
//       throw new VehicleError(
//         'Ocorreu um erro, revise os parâmetros renavam e placa'
//       );
//     let data = await res.json();
//     if (get(data, 'internalCode', false) && data.internalCode === 607)
//       throw new VehicleError(
//         'Ocorreu um erro, revise os parâmetros renavam e placa'
//       );

//     data = data.data[0];
//     const newData: VehicleProtocol = {
//       amount: data.normalizado_valor_total_debitos,
//       plate: data.placa,
//       renavam: data.renavam,
//       brandModel: data.marca,
//       city: data.municipio,
//       category: data.categoria,
//       fuel: data.combustivel,
//       body: data.carroceria,
//       lastLicensing: data.ultimo_lancamento,
//       passengers: data.passageiros,
//       rangeIPVA: data.faixa_ipva,
//       species: data.especie,
//       type: data.tipo,
//       yearManufacture: data.ano_fabricacao,
//       uf,
//       location,
//     };
//     if (!newData.amount) throw new VehicleError('IPVA do veículo já está pago');
//     const token = await createToken(newData);
//     return {
//       token,
//       status: 200,
//     };
//   } catch (err) {
//     console.log(err);
//     if (err instanceof VehicleError) {
//       return {
//         error: {
//           message: err.message,
//         },
//         status: 400,
//       };
//     }
//     return {
//       error: {
//         message: 'Ocorreu um erro desconhecido, por favor tente novalmente',
//       },
//       status: 502,
//     };
//   }
// }
