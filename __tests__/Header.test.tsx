import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import MainHeader from '@/components/header/mainHeader'
test('Pages Router', () => {
  render(<MainHeader />)
  const whatsPopular = screen.getByText(/WhatsPopular/i)

  expect(whatsPopular).toBeDefined()
})
