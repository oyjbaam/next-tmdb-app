import React from 'react'
import { FaUser } from 'react-icons/fa6'
import type { Session } from 'next-auth'
type IsLoginButtonProps = {
  session: Session
}

const IsLoginButton = ({ session }: IsLoginButtonProps) => {
  return (
    <div>
      <FaUser className="h-4 w-4" />
    </div>
  )
}

export default IsLoginButton
