import './globals.css'
import { Inter } from 'next/font/google'
import SideNav from './components/sidenav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Map thingo',
  description: 'thingo for maps innit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-row">
          <SideNav />
          <div className="w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
