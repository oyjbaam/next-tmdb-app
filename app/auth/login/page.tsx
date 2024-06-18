import React from 'react'
import LoginForm from './_components/LoginForm'
import Link from 'next/link'
import FlexBox from '@/components/ui/FlexBox'

const LoginPage = () => {
  return (
    <>
      <FlexBox alignItems="center" justifyContent="center" className="h-20 self-center">
        <h2 className="font-bold text-3xl text-center">로그인</h2>
      </FlexBox>
      <LoginForm />

      <Link href="/auth/signup" className="text-right mt-4 lg:hover:text-violet-300 self-end">
        회원가입 페이지로 이동
      </Link>
    </>
  )
}

export default LoginPage
