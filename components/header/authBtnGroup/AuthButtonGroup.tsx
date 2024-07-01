import Link from 'next/link'
import { buttonStyles } from '@/components/ui/button'
import MoblieAuthButtonGroup from './MoblieAuthButtonGroup'

const AuthButtonGroup = () => {
  return (
    <>
      <li className="hidden md:block space-x-1">
        <Link
          className={buttonStyles({ intent: 'filled', sizes: 'sm' })}
          href="/auth/login"
          aria-label="로그인 페이지로 이동"
        >
          Login
        </Link>
        <Link
          className={buttonStyles({ intent: 'filled', sizes: 'sm' })}
          href="/auth/signup"
          aria-label="회원가입 페이지로 이동"
        >
          Signup
        </Link>
      </li>
      <li className="block md:hidden">
        <MoblieAuthButtonGroup />
      </li>
    </>
  )
}

export default AuthButtonGroup
