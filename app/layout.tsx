import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brandwein & Brandwein | Attorneys at Law - Estate Planning, Tax Law & CPA',
  description:
    'Brandwein & Brandwein, Attorneys at Law, located in Northbrook, IL. Specializing in estate planning, estate administration, tax law, real estate, and corporate law. Certified Public Accountants. Call (847) 509-9200.',
}

export const viewport = {
  themeColor: '#1e2a3a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
