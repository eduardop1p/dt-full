import VehicleDebtsProtocol from './vehicleDebtsProtocol';

export default interface VehicleProtocol extends VehicleDebtsProtocol {
  amount: number;
  plate: string;
  renavam: string;
  uf: string;
  location?: string;
  brandModel?: string;
  category?: string;
  fuel?: string;
  body?: string;
  lastLicensing?: string;
  passengers?: string;
  rangeIPVA?: string;
  species?: string;
  type?: string;
  yearManufacture?: string;
}
