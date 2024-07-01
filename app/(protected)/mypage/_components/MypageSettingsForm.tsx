'use client'
import { useTransition, useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import FormErrorMessage from '@/components/FormErrorMessage'
import FormSuccessMessage from '@/components/FormSuccessMessage'
import { Input } from '@/components/ui/input/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { MypageSettingsInputsValues, MypageSettingsSchema } from '../schema/mypageSettingsSchema'
import { Session } from 'next-auth'
import { updateInfo } from '@/shared/actions/settings'
import { useSession } from 'next-auth/react'

type MypageSettingsFormProps = {
  session: Session
}

const MypageSettingsForm = ({ session }: MypageSettingsFormProps) => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()
  const { update } = useSession()
  const user = session.user
  const form = useForm<MypageSettingsInputsValues>({
    resolver: zodResolver(MypageSettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
    },
  })

  const onSubmit = (values: MypageSettingsInputsValues) => {
    if (!values.name) return
    startTransition(() => {
      updateInfo(values)
        .then(data => {
          if (data.error) {
            setError(data.error)
          }
          if (data.success) {
            update()
            setSuccess(data.success)
          }
        })
        .catch(err => {
          console.error(err)
          setError('Something went wrong!')
        })
    })
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-y-4 w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>
                  <div className="flex justify-between">
                    <span>이름</span>
                    <FormMessage />
                  </div>
                </FormLabel>
                <FormControl>
                  <Input {...field} fullwidth type="text" sizes="lg" disabled={isPending} placeholder="John Doe" />
                </FormControl>
                <FormMessage />
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
                    <span>이메일</span>
                    <FormMessage />
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    fullwidth
                    sizes="lg"
                    placeholder="John Doe@email.com"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
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
                    <span>비밀번호</span>
                    <FormMessage />
                  </div>
                </FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} fullwidth sizes="lg" placeholder="******" type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>
                  <div className="flex justify-between">
                    <span>비밀번호 확인</span>
                    <FormMessage />
                  </div>
                </FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} fullwidth sizes="lg" placeholder="******" type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormErrorMessage message={error} />
        <FormSuccessMessage message={success} />
        <Button type="submit" disabled={isPending}>
          수정하기
        </Button>
      </form>
    </Form>
  )
}

export default MypageSettingsForm
