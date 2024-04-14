import { cva, VariantProps } from 'class-variance-authority'
import React, { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '../../util/twMerge'

const inputStyles = cva(
  'placeholder:italic placeholder:text-slate-400 bg-white border border-black focus:outline-none focus:border-blue-500 focus:ring-sky-500 focus:ring-1 dark:bg-slate-600 dark:placeholder:text-slate-300',
  {
    variants: {
      sizes: {
        sm: 'rounded text-xs',
        md: 'rounded text-xs',
        lg: 'rounded-md text-sm',
      },
      validate: {
        true: 'ring-1 ring-red-500 ring-offset-2',
        false: 'ring-0 focus:ring-1 focus:ring-offset-2',
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
      validate: false,
      fullwidth: false,
    },
  }
)
export type InputProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputStyles>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ validate, sizes, fullwidth, className, ...props }: InputProps, ref) => {
    return <input className={cn(inputStyles({ validate, sizes, fullwidth, className }))} ref={ref} {...props} />
  }
)
Input.displayName = 'Input'

export { Input, inputStyles }
