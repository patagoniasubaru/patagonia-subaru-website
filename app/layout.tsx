import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Patagonia Subaru | Especialistas en Symmetrical AWD',
  description: 'Venta de vehículos Subaru en la Patagonia. Forester, Outback, XV y más. Encontrá tu próximo vehículo con tracción integral.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}