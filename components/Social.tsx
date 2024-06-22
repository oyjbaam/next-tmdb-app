'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import { Button } from './ui/button'
import { FaGithub, FaGoogle } from 'react-icons/fa'

type SocialLoginGroup = {
  isPending: boolean
}

const SocialLoginGroup = ({ isPending }: SocialLoginGroup) => {
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, { callbackUrl: '/' })
  }
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        type="button"
        intent="filled"
        sizes="sm"
        className="w-full"
        disabled={isPending}
        onClick={() => onClick('google')}
      >
        <FaGoogle className="w-5 h-5" />
      </Button>
      <Button
        type="button"
        intent="filled"
        sizes="sm"
        className="w-full"
        disabled={isPending}
        onClick={() => onClick('github')}
      >
        <FaGithub className="w-5 h-5 " />
      </Button>
    </div>
  )
}

export default SocialLoginGroup
