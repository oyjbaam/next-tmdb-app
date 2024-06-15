import React from 'react'
import LoginForm from './_components/LoginForm'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className="flex flex-col w-80 mx-auto mt-36">
      <div className="h-20 flex items-center justify-center">
        <h2 className="font-bold text-3xl text-center">로그인</h2>
      </div>
      <LoginForm />

      <Link href="/signup" className="text-right mt-4 lg:hover:text-violet-300">
        회원가입 페이지로 이동
      </Link>
    </div>
  )
}

export default LoginPage
