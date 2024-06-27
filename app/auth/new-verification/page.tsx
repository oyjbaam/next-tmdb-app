import FlexBox from '@/components/ui/FlexBox'
import NewVerificationForm from './_components/NewVerificationForm'
import { newVerification } from '@/shared/actions/newVerification'

type NewVerificationPageProps = {
  searchParams: Record<string, string | undefined>
}

const NewVerificationPage = async ({ searchParams }: NewVerificationPageProps) => {
  const verifiToken = searchParams.token || ''
  const res = await newVerification(verifiToken)

  return (
    <>
      <FlexBox alignItems="center" justifyContent="center" className="h-20 self-center">
        <h2 className="font-bold text-3xl text-center">인증 확인</h2>
      </FlexBox>
      <NewVerificationForm success={res.success} error={res.error} />
    </>
  )
}

export default NewVerificationPage
