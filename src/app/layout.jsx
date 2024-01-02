import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anime List',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="night">
      <body className={inter.className} >
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
