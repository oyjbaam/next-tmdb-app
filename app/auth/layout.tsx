import React from 'react'
import FlexBox from '@/components/ui/FlexBox'

type AuthLayoutProps = {
  children: React.ReactNode
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <FlexBox flexDirection="col" className="w-80 mx-auto mt-36">
      {children}
    </FlexBox>
  )
}

export default AuthLayout
