'use client'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa6'
import type { Session } from 'next-auth'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { IconButton } from '@/components/ui/button'
import IsLoginDropdownMenu from './IsLoginDropdownMenu'
import IsOpenBackdrop from '@/components/IsOpenBackdrop'

type IsLoginButtonProps = {
  session: Session
}

const IsLoginButton = ({ session }: IsLoginButtonProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <IconButton intent="text" icon={FaUser} aria-label="유저 아이콘" />
        </DropdownMenuTrigger>
        <IsLoginDropdownMenu />
      </DropdownMenu>
      <IsOpenBackdrop open={open} />
    </>
  )
}

export default IsLoginButton
