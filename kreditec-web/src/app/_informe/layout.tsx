import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informe Técnico - Kreditec B2B',
  description: 'Informe de Arquitectura, calidad de software y mapa de sitio del ecosistema Kreditec B2B.',
  keywords: 'Informe Kreditec, Arquitectura Web, Next.js, SEO, B2B, Mapa de Sitio Kreditec',
  robots: 'index, follow'
};

export default function InformeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
