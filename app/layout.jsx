import { Space_Grotesk, Bebas_Neue, Dancing_Script } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmoothScrolling from '../components/SmoothScrolling';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cursive',
});

export const metadata = {
  metadataBase: new URL('https://your-deployed-domain.com'),
  title: 'Anish Chatterjee | Full Stack & Backend Developer',
  description: 'Portfolio of Anish Chatterjee, a 2nd-year RCCIIT student and backend-focused developer specializing in Node.js, Express, MongoDB, PostgreSQL, React, and Next.js.',
  keywords: ['Anish Chatterjee', 'Backend Developer', 'Full Stack Developer', 'React', 'Node.js', 'Next.js', 'RCCIIT', 'Portfolio', 'Software Engineer'],
  authors: [{ name: 'Anish Chatterjee', url: 'https://github.com/digimon-codax' }],
  creator: 'Anish Chatterjee',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://your-deployed-domain.com',
    title: 'Anish Chatterjee | Full Stack Developer',
    description: 'Portfolio of Anish Chatterjee, a 2nd-year RCCIIT student and backend-focused developer.',
    siteName: 'Anish Chatterjee Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anish Chatterjee | Full Stack Developer',
    description: 'Portfolio of Anish Chatterjee, a backend-focused developer.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth relative" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.className} ${bebasNeue.variable} ${dancingScript.variable} min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300`}>
        <SmoothScrolling>
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
