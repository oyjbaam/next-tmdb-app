'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import IconInput from '@/components/ui/input/iconInput'
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { SubmitHandler, useForm } from 'react-hook-form'
import SocialLoginGroup from '@/components/Social'
import { signIn } from '@/auth'
type LoginFormFields = {
  email: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>()

  const onSubmit: SubmitHandler<LoginFormFields> = async data => {
    // await signIn('credentials',{
    //   e
    // })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-7 w-80">
        <label htmlFor="email_address" className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>이메일 주소 *</span>
            {errors.email && <p className="text-red-500 dark:text-red-400"> {errors.email?.message}</p>}
          </div>
          <IconInput
            {...register('email', {
              required: 'ID는 필수 입력값입니다.',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: '이메일 형식을 입력해주세요.',
              },
            })}
            icon={EnvelopeIcon}
            type="text"
            placeholder="email@example.com"
            sizes="lg"
            fullwidth
          />
        </label>
        <label htmlFor="password" className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>비밀번호 *</span>
            {errors.password ? (
              <span className="text-red-500 dark:text-red-400"> {errors.password?.message}</span>
            ) : (
              <span>6~12자리 비밀번호를 입력해주세요.</span>
            )}
          </div>
          <IconInput
            {...register('password', {
              required: '비밀번호는 필수입력 해주세요.',
              minLength: {
                value: 6,
                message: '6~12자리 비밀번호를 입력해주세요.',
              },
              maxLength: {
                value: 12,
                message: '6~12자리 비밀번호를 입력해주세요.',
              },
            })}
            icon={LockClosedIcon}
            type="password"
            placeholder="비밀번호"
            sizes="lg"
            fullwidth
            autoComplete="off"
          />
        </label>
        <Button intent="filled" type="submit" disabled={isSubmitting}>
          {isSubmitting ? '로그인중..' : '로그인'}
        </Button>
      </form>
      <SocialLoginGroup />
    </>
  )
}

export default LoginForm
