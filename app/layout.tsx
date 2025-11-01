import type { Metadata } from 'next'
import { Caveat } from 'next/font/google'
import './globals.css'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
})

export const metadata: Metadata = {
  title: 'Aaron Nielsen - Senior Software Engineer',
  description: 'Personal profile page of Aaron Nielsen, Senior Software Engineer with 29 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={caveat.variable}>{children}</body>
    </html>
  )
}


