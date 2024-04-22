import React from 'react'
import IconInput from '@/components/ui/input/iconInput'
import { Button } from '@/components/ui/button/button'
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const JoinPage = () => {
  return (
    <div className="flex flex-col w-80 mx-auto">
      <div className="h-20 flex items-center justify-center">
        <h2 className="font-bold text-3xl text-center">회원가입</h2>
      </div>

      <form action="" className="flex flex-col gap-4">
        <label htmlFor="email_address" className="flex flex-col gap-2">
          <span>이메일 주소 *</span>
          <IconInput
            icon={EnvelopeIcon}
            type="email"
            id="email_address"
            placeholder="email-ID@example.com"
            sizes="lg"
            required
            fullwidth
          />
        </label>
        <label htmlFor="password" className="flex flex-col gap-2">
          <span>비밀번호 *</span>
          <IconInput
            icon={LockClosedIcon}
            type="password"
            id="password"
            placeholder="비밀번호"
            sizes="lg"
            required
            fullwidth
            autoComplete="off"
          />
        </label>
        <Button intent="filled">회원가입</Button>
      </form>
      <p className="text-right my-4">
        이미 회원이신가요? <Link href="/login">로그인 페이지로 이동</Link>
      </p>
    </div>
  )
}

export default JoinPage
