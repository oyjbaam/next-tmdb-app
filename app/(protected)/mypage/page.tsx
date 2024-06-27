import React from 'react'
import MypageSettingsForm from './_components/MypageSettingsForm'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import FlexBox from '@/components/ui/FlexBox'

const MyPage = async () => {
  const session = await auth()

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <>
      <FlexBox alignItems="center" justifyContent="center" className="h-20 self-center">
        <h2 className="font-bold text-3xl text-center">나의 정보</h2>
      </FlexBox>
      <MypageSettingsForm session={session} />
    </>
  )
}

export default MyPage
