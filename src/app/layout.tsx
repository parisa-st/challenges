import './globals.css';
import { ReactNode } from 'react';
import { Providers } from '../lib/Providers';
import { CssBaseline } from '@mui/material';

export const metadata = {
  title: 'Product Explorer',
  description: 'Browse products and users interactively.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CssBaseline />
          {children}
        </Providers>
      </body>
    </html>
  );
}