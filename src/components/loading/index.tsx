export default function Loading() {
  return (
    <div className="w-full h-screen fixed left-0 top-0 flex items-center justify-center bg-0003 z-10">
      <div className="flex flex-col gap-1 items-center bg-white p-4 rounded">
        <svg
          aria-label="A carregar..."
          viewBox="0 0 100 100"
          width={43}
          height={43}
          className="animation-spin"
        >
          <rect
            className="x1i210e2"
            height={6}
            opacity={0.08333333333333333}
            rx={3}
            ry={3}
            transform="rotate(-60 50 50)"
            width={25}
            x={72}
            y={47}
          />
          <rect
            className="x1i210e2"
            height={6}
            opacity={0.16666666666666666}
            rx={3}
            ry={3}
            transform="rotate(-30 50 50)"
            width={25}
            x={72}
            y={47}
          />
          <rect
            className="x1i210e2"
            height={6}
            opacity={0.25}
            rx={3}
            ry={3}
            width={25}
            x={72}
            y={47}
          />
          <rect
            className="x1i210e2"
            height={6}
            opacity={0.3333333333333333}
            rx={3}
            ry={3}
            transform="rotate(30 50 50)"
            width={25}
            x={72}
            y={47}
          />
          <rect
            className="x1i210e2"
            height={6}
            opacity={0.4166666666666667}
            rx={3}
            ry={3}
            transform="rotate(60 50 50)"
            width={25}
            x={72}
            y={47}
          />
          <rect
            className="x1i210e2"
            height={6}
            opacity={0.5}
            rx={3}
            ry={3}
            transform="rotate(90 50 50)"
            width={25}
            x={72}
            y={47}
          />
          <rect
            className="x1i210e2"
            height={6}
            opacity={0.5833333333333334}
            rx={3}
            ry={3}
            transform="rotate(120 50 50)"
            width={25}
            x={72}
            y={47}
          />
          <rect
            className="x1i210e2"
            height={6}
            opacity={0.6666666666666666}
            rx={3}
            ry={3}
            transform="rotate(150 50 50)"
            width={25}
            x={72}
            y={47}
          />
          <rect
            className="x1i210e2"
            height={6}
            opacity={0.75}
            rx={3}
            ry={3}
            transform="rotate(180 50 50)"
            width={25}
            x={72}
            y={47}
          />
          <rect
            className="x1i210e2"
            height={6}
            opacity={0.8333333333333334}
            rx={3}
            ry={3}
            transform="rotate(210 50 50)"
            width={25}
            x={72}
            y={47}
          />
          <rect
            className="x1i210e2"
            height={6}
            opacity={0.9166666666666666}
            rx={3}
            ry={3}
            transform="rotate(240 50 50)"
            width={25}
            x={72}
            y={47}
          />
        </svg>
        <span className="text-xs font-normal text-black">
          Aguarde, tenha paciência
        </span>
      </div>
    </div>
  );
}
