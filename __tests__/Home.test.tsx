import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/(home)/page'

test.skip('Pages Router', async () => {
  render(<Home />)
  const whatsPopular = await screen.findByText(/welcome/i)

  expect(whatsPopular).toBeDefined()
})
