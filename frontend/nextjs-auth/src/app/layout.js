'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider, useSession } from "next-auth/react"
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, pageProps }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={pageProps}>
          <div className={"h-screen"}>
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
