export default function ErrorMsg({ children }: { children: any }) {
  return (
    <span className="text-[9px] ml-[1px] font-normal text-red-500">
      {children}
    </span>
  );
}
