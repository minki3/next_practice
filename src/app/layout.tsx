import StoreProvider from '@/app/StoreProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'portfoilo',
  description: 'portfoilo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  )
}
