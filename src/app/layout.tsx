import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar/Navbar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AirBnB Clone',
  description: 'This is an AirBnB clone built with Next.js and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
