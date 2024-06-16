import type { Metadata } from 'next'
import './globals.css'
import ThemeProviders from '@/shared/context/themeProviders'
import DefaultHeader from '@/components/header/DefaultHeader'
import SideNavigation from '@/components/nav/SideNav'
import SidebarProvider from '@/shared/context/toggleContext'

export const metadata: Metadata = {
  title: 'TMDB Movie',
  description: 'Search Movie and TV Programs',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
        <ThemeProviders>
          <SidebarProvider>
            <DefaultHeader />
            <SideNavigation />
            <main className="w-full mx-auto mt-10">{children}</main>
          </SidebarProvider>
        </ThemeProviders>
      </body>
    </html>
  )
}

export default RootLayout
