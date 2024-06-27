'use client'
import { useEffect } from 'react'
import { useQueryString } from '@/shared/hooks/useQueryString'
import JumpingDots from '@/components/ui/JumpingDots'
import FlexBox from '@/components/ui/FlexBox'
import FormErrorMessage from '@/components/FormErrorMessage'
import FormSuccessMessage from '@/components/FormSuccessMessage'

type NewVerificationFormProps = {
  error?: string
  success?: string
}

const NewVerificationForm = ({ error, success }: NewVerificationFormProps) => {
  const { router } = useQueryString()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/auth/login')
    }, 1000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <FlexBox justifyContent="center" className="w-full">
      {!error && !success && <JumpingDots />}
      <FormErrorMessage message={error} />
      {success && <FormSuccessMessage message={success} />}
    </FlexBox>
  )
}

export default NewVerificationForm
