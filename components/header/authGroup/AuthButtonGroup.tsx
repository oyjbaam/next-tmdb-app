import React from 'react'
import Link from 'next/link'
import { buttonStyles } from '@/components/ui/button'

const AuthButtonGroup = () => {
  return (
    <>
      <li className="hidden md:flex">
        <Link
          className={buttonStyles({ intent: 'filled', sizes: 'sm' })}
          href="/auth/login"
          aria-label="로그인 페이지로 이동"
        >
          Login
        </Link>
      </li>
      <li className="hidden md:flex">
        <Link
          className={buttonStyles({ intent: 'filled', sizes: 'sm' })}
          href="/auth/signup"
          aria-label="회원가입 페이지로 이동"
        >
          Signup
        </Link>
      </li>
    </>
  )
}

export default AuthButtonGroup
