import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pos E',
  description: 'Point of Sale E-commerce',
  generator: 'Cornosoft.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
