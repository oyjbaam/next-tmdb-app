'use client'
import React, { useState, useTransition } from 'react'
import IconInput from '@/components/ui/input/iconInput'
import { Button } from '@/components/ui/button/button'
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { SignupSchema, defaultValues, SignupInputsValues } from '../schema/signupSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signup } from '@/shared/actions/signup'
import FormErrorMessage from '@/components/FormErrorMessage'
import FormSuccessMessage from '@/components/FormSuccessMessage'

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
    startTransition(() => {
      signup(values).then(data => {
        if (data) {
          setError(data.error)
          setSuccess(data.success)
        }
      })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
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
                      // disabled={isPending}
                      icon={EnvelopeIcon}
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
                      // disabled={isPending}
                      icon={LockClosedIcon}
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
                      // disabled={isPending}
                      icon={LockClosedIcon}
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
            {isPending ? '가입중' : '회원가입'}
          </Button>
          <FormErrorMessage message={error} />
          <FormSuccessMessage message={success} />
        </div>
      </form>
    </Form>
  )
}

export default SignupForm
