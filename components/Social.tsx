'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import { Button } from './ui/button'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const SocialLoginGroup = () => {
  return (
    <div className="flex items-center w-full gap-x-2 mt-4">
      <Button intent="filled" sizes="sm" className="dark:hover:bg-slate-50 w-full dark:hover:text-black">
        <FaGoogle className="w-5 h-5" />
      </Button>
      <Button intent="filled" sizes="sm" className="dark:hover:bg-slate-50 w-full dark:hover:text-black">
        <FaGithub className="w-5 h-5 " />
      </Button>
    </div>
  )
}

export default SocialLoginGroup
