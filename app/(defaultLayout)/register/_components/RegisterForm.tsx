'use client'
import React from 'react'
import IconInput from '@/components/ui/input/iconInput'
import { Button } from '@/components/ui/button/button'
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { SubmitHandler, useForm } from 'react-hook-form'

type RegisterFormFields = {
  email: string
  password: string
  confirmPassword: string
}

const RegisterForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormFields>()

  const onSubmit: SubmitHandler<RegisterFormFields> = data => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
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
            validation={Boolean(errors.email?.message)}
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
            placeholder="******"
            sizes="lg"
            fullwidth
            autoComplete="off"
            validation={Boolean(errors.password?.message)}
          />
        </label>
        <label htmlFor="confirmPassword" className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>비밀번호 확인*</span>
            {errors.confirmPassword && (
              <span className="text-red-500 dark:text-red-400"> {errors.confirmPassword?.message}</span>
            )}
          </div>
          <IconInput
            {...register('confirmPassword', {
              required: '비밀번호 확인은 필수입력 해주세요.',
              validate: (value, formValue) => value === formValue.password || '비밀번호가 다릅니다.',
            })}
            icon={LockClosedIcon}
            type="password"
            placeholder="******"
            sizes="lg"
            fullwidth
            autoComplete="off"
            validation={Boolean(errors.confirmPassword?.message)}
          />
        </label>
        <Button intent="filled" className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? '가입중' : '회원가입'}
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm
