import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

export const metadata = {
  title: 'Bartłomiej Boroski | Kierownik Projektów IT',
  description: 'Ekspert wdrożeń systemów ERP z 13-letnim doświadczeniem. Specjalista integracji, automatyzacji procesów i wykorzystania AI w biznesie.',
  keywords: 'kierownik projektów IT, wdrożenia ERP, Navireo, Subiekt GT, automatyzacja procesów, integracja systemów, sztuczna inteligencja w biznesie',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        <Preloader />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
