import { render, screen, within } from '@testing-library/react'
import { test, expect } from 'vitest'
import Home from '../app/page'

test('Pages Router', () => {
  render(<Home />)
  const whatsPopular = screen.getByText(/WhatsPopular/i)

  expect(whatsPopular).toBeDefined()
})
