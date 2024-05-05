import React from 'react'
import RegisterForm from './_components/registerForm'
import Link from 'next/link'

const JoinPage = () => {
  return (
    <div className="flex flex-col w-80 mx-auto mt-36">
      <div className="h-20 flex items-center justify-center">
        <h2 className="font-bold text-3xl text-center">회원가입</h2>
      </div>
      <RegisterForm />
      <p className="text-right my-4">
        이미 회원이신가요? <Link href="/login">로그인 페이지로 이동</Link>
      </p>
    </div>
  )
}

export default JoinPage
