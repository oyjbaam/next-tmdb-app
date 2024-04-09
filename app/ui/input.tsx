import { cva, VariantProps } from 'class-variance-authority'
import React, { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '../util/twMerge'

const inputStyles = cva(
  'placeholder:italic placeholder:text-slate-400 block bg-white h-8 px-4 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm',
  {
    variants: {
      validate: {
        true: 'ring-2 ring-red-300 ring-offset-2',
        false: 'ring-0 focus:ring-2 focus:ring-offset-2',
      },
      rounded: {
        sm: 'rounded text-xs py-2 px-4',
        md: 'rounded text-xs py-3 px-6',
        lg: 'rounded text-sm py-3.5 px-7',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      validate: false,
    },
  }
)

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputStyles> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ validate, className, rounded, ...props }: InputProps, ref) => {
    return <input className={cn(inputStyles({ validate, className }))} ref={ref} {...props} />
  }
)
Input.displayName = 'Input'

export { Input, inputStyles }
