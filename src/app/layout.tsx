import type { Metadata } from 'next';

import './globals.css';
import LoadingContextProvider from '@/utils/loadingContext/context';

export const metadata: Metadata = {
  title: 'Consulta de débitos do veículo',
  description:
    'Consulta Online de Débitos Vinculados a Veículos da Secretaria da Fazenda e Planejamento',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <LoadingContextProvider>{children}</LoadingContextProvider>
      </body>
    </html>
  );
}
