export default interface VehicleDebtsProtocol {
  error?: { message: string };
  status: number;
  data: { title: string; value: number }[];
  city: string;
}
