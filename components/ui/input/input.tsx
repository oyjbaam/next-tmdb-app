import { cva, VariantProps } from 'class-variance-authority'
import React, { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '@/shared/util/twMerge'

const inputStyles = cva(
  'placeholder:italic placeholder:text-slate-400 bg-white border border-slate-400 focus:outline-none ring-inset dark:bg-slate-600 dark:placeholder:text-slate-400',
  {
    variants: {
      sizes: {
        sm: 'rounded-md text-xs',
        md: 'rounded-md text-xs',
        lg: 'rounded-md text-sm',
      },
      validation: {
        true: 'ring-1 ring-red-500 border-red-500',
        false: 'ring-0 focus:ring-1 focus:ring-sky-300 dark:focus:ring-sky-100 ',
      },
      fullwidth: {
        false: '',
        true: 'w-full',
      },
    },
    compoundVariants: [
      {
        sizes: 'sm',
        className: 'py-1.5 px-3',
      },
      {
        sizes: 'md',
        className: 'py-2.5 px-3.5',
      },
      {
        sizes: 'lg',
        className: 'py-3 px-4',
      },
    ],
    defaultVariants: {
      sizes: 'md',
      validation: false,
      fullwidth: false,
    },
  }
)
export type InputProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputStyles>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ validation, sizes, fullwidth, className, ...props }: InputProps, ref) => {
    return <input className={cn(inputStyles({ validation, sizes, fullwidth, className }))} ref={ref} {...props} />
  }
)
Input.displayName = 'Input'

export { Input, inputStyles }
