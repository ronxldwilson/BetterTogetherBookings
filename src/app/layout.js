import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata = {
  title: 'Better Together',
  description:
    'Better Together is a platform that connects you with experienced professionals to help your healing journey'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <title>
        Better Together - Book Sessions with Certified Professionals
      </title>
      <meta
        name='description'
        content='Connect with therapists, fitness coaches, psychiatric care specialists, and nutritionists on Better Together. Book personalized sessions and start your journey to well-being.'
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
