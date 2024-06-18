import React from 'react'

type IsOpenBackdropProps = {
  open: boolean
}

const IsOpenBackdrop = ({ open }: IsOpenBackdropProps) => {
  if (!open) {
    return null
  }

  return <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" aria-hidden="true" />
}

export default IsOpenBackdrop
