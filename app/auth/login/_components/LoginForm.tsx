'use client'
import React, { useState, useTransition } from 'react'
import { Button } from '@/components/ui/button'
import IconInput from '@/components/ui/input/iconInput'
import { FaRegEnvelope, FaLock } from 'react-icons/fa6'
import { useForm } from 'react-hook-form'
import SocialLoginGroup from '@/components/Social'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { LoginInputsValues, defaultValues, LoginSchema } from '../schema/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import FormErrorMessage from '@/components/FormErrorMessage'
import FormSuccessMessage from '@/components/FormSuccessMessage'
import { login } from '@/shared/actions/login'
import Spinner from '@/components/common/Spinner'

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()
  const form = useForm<LoginInputsValues>({ defaultValues, resolver: zodResolver(LoginSchema) })

  const {
    formState: { isSubmitting, errors },
  } = form

  const onSubmit = (values: LoginInputsValues) => {
    setError('')
    setSuccess('')
    startTransition(async () => {
      try {
        const res = await login(values)
        if (res.error) {
          form.reset()
          setError(res.error)
        }
        if (res.success) {
          form.reset()
          setSuccess(res.success)
        }
        // if (data?.twoFactor) {
        //   setShowTwoFactor(true)
        // }
      } catch (e) {
        setError('Something went wrong!')
      }
    })
    // await signIn('credentials',{
    //   e
    // })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4 w-full">
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
                    inputMode="email"
                    title="이메일 형식의 아이디를 입력해 주세요"
                    icon={FaRegEnvelope}
                    type="text"
                    placeholder="email@example.com"
                    sizes="lg"
                    fullwidth
                    validation={Boolean(errors.email?.message)}
                    disabled={isPending}
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
                    title="비밀번호를 입력해 주세요"
                    icon={FaLock}
                    type="password"
                    placeholder="*****"
                    sizes="lg"
                    fullwidth
                    autoComplete="off"
                    validation={Boolean(errors.password?.message)}
                    disabled={isPending}
                  />
                </FormControl>
              </FormItem>
            )
          }}
        />

        <Button intent="filled" type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : '로그인'}
        </Button>
        <FormErrorMessage message={error} />
        <FormSuccessMessage message={success} />
      </form>
      <SocialLoginGroup />
    </Form>
  )
}

export default LoginForm
