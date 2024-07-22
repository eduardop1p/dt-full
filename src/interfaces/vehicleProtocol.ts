export default interface VehicleProtocol {
  amount: number;
  plate: string;
  uf: string;
  renavam: string;
  location?: string;
  data: {
    title: string;
    value: string;
  }[];
}
