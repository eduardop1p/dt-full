import formatPrice from '@/services/formatPrice';

export default function TotalDebts({ amount }: { amount: number }) {
  return (
    <div className="flex items-center w-full justify-between gap-8 bg-c0c0c0  px-2 py-[2px]">
      <h2 className="text-black font-bold text-[11px]">
        Valor total - IPVA 2024
      </h2>
      <span className="text-black font-bold text-[11px]">
        {formatPrice(amount)}
      </span>
    </div>
  );
}
