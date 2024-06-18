'use client'
import React, { useState, useTransition } from 'react'
import IconInput from '@/components/ui/input/iconInput'
import { Button } from '@/components/ui/button/button'
import { FaRegEnvelope, FaLock, FaUser } from 'react-icons/fa6'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { SignupSchema, defaultValues, SignupInputsValues } from '../schema/signupSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signup } from '@/shared/actions/signup'
import FormErrorMessage from '@/components/FormErrorMessage'
import FormSuccessMessage from '@/components/FormSuccessMessage'
import Spinner from '@/components/common/Spinner'

const SignupForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()
  const form = useForm<SignupInputsValues>({
    defaultValues,
    resolver: zodResolver(SignupSchema),
  })

  const {
    handleSubmit,
    formState: { errors },
  } = form

  const onSubmit = (values: SignupInputsValues) => {
    setError('')
    setSuccess('')
    startTransition(async () => {
      const res = await signup(values)
      if (res) {
        setError(res.error)
        setSuccess(res.success)
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>
                  <div className="flex justify-between">
                    <span>이름 *</span>
                    <FormMessage />
                  </div>
                </FormLabel>
                <FormControl>
                  <IconInput
                    {...field}
                    required
                    title="이름을 입력해 주세요."
                    disabled={isPending}
                    icon={FaUser}
                    type="text"
                    placeholder="John Doe"
                    sizes="lg"
                    fullwidth
                    validation={Boolean(errors.name?.message)}
                  />
                </FormControl>
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>
                  <div className="flex justify-between">
                    <span>이메일 주소 *</span>
                    <FormMessage />
                  </div>
                </FormLabel>
                <FormControl>
                  <IconInput
                    {...field}
                    required
                    title="이메일 형식의 아이디를 입력해 주세요"
                    inputMode="email"
                    disabled={isPending}
                    icon={FaRegEnvelope}
                    type="text"
                    placeholder="email@example.com"
                    sizes="lg"
                    fullwidth
                    validation={Boolean(errors.email?.message)}
                  />
                </FormControl>
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>
                  <div className="flex justify-between">
                    <span>비밀번호 *</span>
                    <FormMessage />
                  </div>
                </FormLabel>
                <FormControl>
                  <IconInput
                    {...field}
                    required
                    title="비밀번호는 6~12자 사이로 입력해 주세요."
                    disabled={isPending}
                    icon={FaLock}
                    type="password"
                    placeholder="******"
                    sizes="lg"
                    fullwidth
                    validation={Boolean(errors.password?.message)}
                  />
                </FormControl>
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>
                  <div className="flex justify-between">
                    <span>비밀번호 확인 *</span>
                    <FormMessage />
                  </div>
                </FormLabel>
                <FormControl>
                  <IconInput
                    {...field}
                    required
                    title="비밀번호를 한 번 더 입력해 주세요."
                    disabled={isPending}
                    icon={FaLock}
                    type="password"
                    placeholder="******"
                    sizes="lg"
                    fullwidth
                    validation={Boolean(errors.confirmPassword?.message)}
                  />
                </FormControl>
              </FormItem>
            )
          }}
        />
        <Button intent="filled" className="w-full" type="submit" disabled={isPending}>
          {isPending ? <Spinner /> : '회원가입'}
        </Button>
        <FormErrorMessage message={error} />
        <FormSuccessMessage message={success} />
      </form>
    </Form>
  )
}

export default SignupForm
