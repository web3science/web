import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'dApp Ideas',
  description: 'A non-fungible way to crowdsourcing answer seeking',
  authors: [
    { name: 'Palash A.', url: 'https://thisispalash.com' },
  ],
  keywords: [
    'dApp',
    'decentralized',
    'crowdsourcing',
    'non-fungible',
    'ethereum',
    'blockchain',
    'science',
  ],
  referrer: 'origin-when-cross-origin',
  themeColor: '#000000',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'follow, index',
  icons: {
    icon: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    type: 'website',
      url: 'https://example.com',
      title: 'My Website',
      description: 'My Website Description',
      siteName: 'My Website',
      images: [{
        url: '/nyan-cat.png',
      }
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
