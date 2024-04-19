import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'
import MainHeader from '../components/header/mainHeader'
import SideNavigation from '../components/header/sideNav'
import SidebarProvider from '@/context/toggleContext'
export const metadata: Metadata = {
  title: 'TMDB Movie',
  description: 'Search Movie and TV Programs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
        <Providers>
          <SidebarProvider>
            <MainHeader />
            <SideNavigation />
            <main className="inner w-full mx-auto">{children}</main>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  )
}
