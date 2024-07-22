export default interface VehicleDebtsProtocol {
  error?: { message: string };
  status: number;
  amount: number;
  data: {
    title: string;
    value: string;
  }[];
}
