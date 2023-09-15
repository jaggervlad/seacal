import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { AiOutlineArrowUp } from 'react-icons/ai';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Sebastian Acosta | Mern Stack Developer',
  description: 'Desarrollador web con más de 4 años de experiencia en React.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className}`}>
        {children}

        <ScrollToTopButton />
      </body>
    </html>
  );
}
