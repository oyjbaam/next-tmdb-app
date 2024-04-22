import { AppRouterContext, type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { FC } from 'react'
import { ThemeProvider } from 'next-themes'
const withAppRouterContext = (Story: FC) => (
  <AppRouterContext.Provider value={{} as AppRouterInstance}>
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  </AppRouterContext.Provider>
)

export default withAppRouterContext
