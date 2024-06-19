import React, { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '@/shared/util/twMerge'
import { cva, VariantProps } from 'class-variance-authority'

export const checkboxStyles = cva(
  'font-semibold transition duration-200 ease-in-out inline-flex items-center justify-center cursor-pointer box-border',
  {
    variants: {
      intent: {
        filled:
          'bg-purple-600 border border-purple-700  text-white lg:hover:bg-purple-700 active:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700',
        outlined: ' border border-purple-700 lg:hover:bg-purple-600 lg:hover:text-white active:bg-purple-600',
      },
      sizes: {
        sm: 'text-xs',
        md: 'text-xs',
        lg: 'text-sm',
      },
      rounded: {
        normal: '',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      { sizes: 'sm', className: 'gap-x-1.5 py-2 px-4' },
      { sizes: 'md', className: 'py-3 px-6 gap-x-2' },
      { sizes: 'lg', className: 'py-3.5 px-7 gap-x-2' },
    ],
    defaultVariants: {
      intent: 'filled',
      sizes: 'md',
      rounded: 'normal',
    },
  }
)
type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof checkboxStyles>

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, id, intent = 'filled', sizes, rounded, className, ...props }: CheckboxProps) => {
    return (
      <label htmlFor={id} className={cn(checkboxStyles({ intent, sizes, rounded, className }))}>
        <input {...props} id={id} type="checkbox" className="hidden" />
        {children}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
