import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../util/twMerge'
import React, { ButtonHTMLAttributes, forwardRef } from 'react'

const buttonStyles = cva('flex items-center justify-center transition duration-200 ease-in-out', {
  variants: {
    intent: {
      filled:
        'text-white bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 hover:bg-indigo-500 active:opacity-[0.85]',
      outlined: 'ring-1 ring-inset ring-indigo-300 hover:bg-indigo-200 active:bg-indigo-300',
      text: 'active:ring-transparent hover:opacity-80',
    },
    size: {
      sm: 'rounded text-xs py-2 px-4',
      md: 'rounded text-xs py-3 px-6',
      lg: 'rounded text-sm py-3.5 px-7',
      text: 'text-sm',
    },
    rounded: {
      normal: '',
      full: 'rounded-full',
    },
    disabled: {
      true: 'hover:opacity-1 cursor-not-allowed active:ring-transparent',
    },
  },

  defaultVariants: {
    intent: 'filled',
    size: 'md',
    rounded: 'normal',
  },
})

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonStyles> {
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, disabled, ...props }: ButtonProps, ref) => {
    return (
      <button
        disabled={disabled ? disabled : undefined}
        className={cn(buttonStyles({ intent, disabled, size, className }))}
        ref={ref}
        {...props}
      ></button>
    )
  }
)
Button.displayName = 'Button'
export default Button
