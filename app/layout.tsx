import type { Metadata } from 'next'
import './globals.css'
import ThemeProviders from '@/shared/context/themeProviders'
import DefaultHeader from '@/components/header/DefaultHeader'
import SideNavigation from '@/components/nav/SideNav'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import SidebarProvider from '@/shared/context/sidebarToggleProvider'

export const metadata: Metadata = {
  title: 'TMDB Movie',
  description: 'Search Movie and TV Programs',
}

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="ko" suppressHydrationWarning>
        <body className="text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <ThemeProviders>
            <SidebarProvider>
              <DefaultHeader />
              <SideNavigation />
              <main className="w-full mx-auto mt-10 px-4 xl:px-0">{children}</main>
              <SpeedInsights />
            </SidebarProvider>
          </ThemeProviders>
        </body>
      </html>
    </SessionProvider>
  )
}

export default RootLayout
