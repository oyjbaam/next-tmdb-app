'use client'
import { useEffect } from 'react'
import { useQueryString } from '@/shared/hooks/useQueryString'
import JumpingDots from '@/components/ui/JumpingDots'
import FlexBox from '@/components/ui/FlexBox'
import FormErrorMessage from '@/components/FormErrorMessage'
import FormSuccessMessage from '@/components/FormSuccessMessage'
import Link from 'next/link'
import { buttonStyles } from '@/components/ui/button'

type NewVerificationFormProps = {
  error?: string
  success?: string
}

const NewVerificationForm = ({ error, success }: NewVerificationFormProps) => {
  const { router } = useQueryString()

  useEffect(() => {
    if (error) {
      return
    }
    const timer = setTimeout(() => {
      router.push('/auth/login')
    }, 1000)

    return () => clearTimeout(timer)
  }, [router, error])

  return (
    <FlexBox justifyContent="center" className="w-full">
      {!error && !success && <JumpingDots />}
      {error && (
        <FlexBox flexDirection="col" justifyContent="center" alignItems="center" className="w-full gap-4">
          <FormErrorMessage message={error} />
          <Link href="/auth/login" className={buttonStyles({ sizes: 'sm', intent: 'text' })}>
            로그인 페이지로 이동
          </Link>
        </FlexBox>
      )}
      {success && <FormSuccessMessage message={success} />}
    </FlexBox>
  )
}

export default NewVerificationForm
