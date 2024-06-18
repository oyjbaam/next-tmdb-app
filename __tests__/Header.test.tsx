import { render, screen } from '@testing-library/react'
import LoginForm from '@/app/auth/login/_components/LoginForm'
test('Pages Router', () => {
  render(<LoginForm />)
  const whatsPopular = screen.getByText(/이메일 주소 */i)

  expect(whatsPopular).toBeDefined()
})
