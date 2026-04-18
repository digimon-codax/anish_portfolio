import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Anish Chatterjee | Backend Developer',
  description: 'Portfolio of Anish Chatterjee, enthusiastic learner about Full Stack development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.className} min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300`}>
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
