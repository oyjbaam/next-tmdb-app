import React from 'react'
import SignupForm from './_components/SignupForm'
import Link from 'next/link'
import FlexBox from '@/components/ui/FlexBox'

const SignupPage = () => {
  return (
    <>
      <FlexBox alignItems="center" justifyContent="center" className="h-20 self-center">
        <h2 className="font-bold text-3xl text-center">회원가입</h2>
      </FlexBox>
      <SignupForm />
      <p className="text-right my-4 self-end">
        이미 회원이신가요?{' '}
        <Link href="/auth/login" className="text-right mt-4 lg:hover:text-violet-300">
          로그인 페이지로 이동
        </Link>
      </p>
    </>
  )
}

export default SignupPage
