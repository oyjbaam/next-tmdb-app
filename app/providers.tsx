'use client'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isMount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount) {
    return
  }
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  )
}

export default Providers
