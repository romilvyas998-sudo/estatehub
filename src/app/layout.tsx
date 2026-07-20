import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EstateHub | Find your place',
  description: 'A thoughtful new way to discover, compare and list local real estate.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
