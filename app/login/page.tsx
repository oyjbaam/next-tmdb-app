import React from 'react'
import { Button } from '../ui/button'
import IconButton from '../ui/iconButton'
import { Input } from '../ui/input'
import { PlusIcon, CheckCircleIcon } from '@heroicons/react/20/solid'
const LoginPage = () => {
  return (
    <>
      <h2 className="text-2xl text-center">로그인</h2>
      <form action="" className="flex flex-col gap-4">
        <div>
          <label htmlFor="email_address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            이메일 주소 *
          </label>
          <Input type="email" id="email_address" placeholder="email-ID@example.com" rounded="md" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            비밀번호 *
          </label>
          <Input type="password" id="password" placeholder="비밀번호" rounded="md" validate required />
        </div>
        <Button intent="filled">로그인</Button>
        <IconButton sizes="lg" intent="filled" icon={PlusIcon} className="w-fit" />
      </form>
    </>
  )
}

export default LoginPage
