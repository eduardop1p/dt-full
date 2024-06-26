import formatPrice from '@/services/formatPrice';

interface Props {
  debts: { title: string; value: number }[];
}

export default function Debts({ debts }: Props) {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-black uppercase text-[13px] font-bold text-left">
        Débitos
      </h2>
      <div className="flex flex-col w-full justify-between bg-e6e6e6 border border-solid border-black">
        {debts.map((item, i) => (
          <div
            className="flex items-center w-full justify-between border-item px-2 py-2"
            key={i}
          >
            <h2 className="text-black font-bold text-[11px]">{item.title}</h2>
            <span className="text-black font-bold text-[11px]">
              {formatPrice(item.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
