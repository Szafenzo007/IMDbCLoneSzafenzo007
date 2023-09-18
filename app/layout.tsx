import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Szafenzo007 Movies Clone',
  description: 'Powered by Puffozaurus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <ThemeProvider 
                        attribute='class' defaultTheme='system' enableSystem>

          <Header/>

          <Navbar />

        {children}
        </ThemeProvider>
          
      </body>
    </html>
  )
}
