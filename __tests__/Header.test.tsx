import { render, screen } from '@testing-library/react'
import MainHeader from '@/components/header/mainHeader'
import LoginForm from '@/app/login/_components/LoginForm'
test('Pages Router', () => {
  render(<LoginForm />)
  const whatsPopular = screen.getByText(/이메일 주소 */i)

  expect(whatsPopular).toBeDefined()
})
