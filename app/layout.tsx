import type { Metadata } from 'next'
import './globals.css'
import MainHeader from './components/header/mainHeader'
import SideNavigation from './components/header/sideNav'
import Providers from './providers'
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
      <body className="text-slate-700 dark:bg-slate-800 dark:text-slate-300">
        <Providers>
          <div className="inner">
            <MainHeader />
            <div className="grid grid-cols-8 gap-2">
              <SideNavigation />
              <main className="col-span-7 w-full mx-auto">{children}</main>
            </div>
          </div>
          <footer className="flex items-center justify-center h-32 text-center border-t border-slate-300 dark:border-slate-600">
            <span>OJ</span>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
