import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/util/twMerge'
import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

export const buttonStyles = cva(
  'font-semibold transition duration-200 ease-in-out inline-flex items-center justify-center box-border',
  {
    variants: {
      intent: {
        filled:
          'bg-purple-600 text-white border border-purple-700 dark:lg:hover:bg-purple-700 lg:hover:bg-purple-700 active:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700',
        outlined:
          'border border-purple-700 lg:hover:bg-purple-600 lg:hover:text-white active:bg-purple-600 dark:lg:hover:bg-purple-400',
        text: 'lg:hover:text-purple-600 active:text-purple-200 dark:lg:hover:text-purple-500',
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
      disabled: {
        false: '',
        true: 'cursor-not-allowed',
      },
      _content: {
        text: '',
        textAndIcon: 'inline-flex items-center',
        icon: '',
      },
    },
    compoundVariants: [
      {
        intent: 'filled',
        disabled: true,
        className: 'bg-slate-400 lg:hover:bg-slate-400 active:bg-gray-200',
      },
      {
        intent: 'outlined',
        disabled: true,
        className:
          'bg-slate-300 border border-1 border-gray-400 text-gray-400 lg:hover:bg-gray-50 lg:hover:text-gray-400 active:bg-gray-50 active:text-gray-400',
      },
      {
        intent: 'text',
        disabled: true,
        className: 'text-gray-400 lg:hover:text-gray-300 active:text-gray-400 dark:lg:hover:text-gray-400',
      },
      { sizes: 'sm', rounded: 'normal', className: 'rounded' },
      { sizes: ['md', 'lg'], rounded: 'normal', className: 'rounded-md' },
      { sizes: 'sm', _content: ['text', 'textAndIcon'], className: 'gap-x-1.5 py-2 px-4' },
      { sizes: ['md', 'lg'], _content: ['text', 'textAndIcon'], className: 'gap-x-2' },
      { sizes: 'md', _content: ['textAndIcon', 'text'], className: 'py-3 px-6' },
      { sizes: 'lg', _content: ['textAndIcon', 'text'], className: 'py-3.5 px-7' },
      { sizes: 'sm', _content: 'icon', className: 'p-1' },
      { sizes: 'md', _content: 'icon', className: 'p-1.5' },
      { sizes: 'lg', _content: 'icon', className: 'p-2' },
    ],
    defaultVariants: {
      intent: 'filled',
      sizes: 'md',
      rounded: 'normal',
      _content: 'text',
      disabled: false,
    },
  }
)

export type SVGComponent = React.ComponentType<React.SVGAttributes<SVGElement>>
export type ButtonVariants = Omit<VariantProps<typeof buttonStyles>, '_content'>
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<ButtonVariants> &
  (
    | {
        trailingIcon?: SVGComponent
        leadingIcon?: never
      }
    | {
        trailingIcon?: never
        leadingIcon?: SVGComponent
      }
  ) & { asChild?: boolean }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      intent,
      sizes,
      rounded,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      className,
      disabled,
      children,
      asChild,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        disabled={disabled}
        className={cn(
          buttonStyles({
            intent,
            sizes,
            rounded,
            _content: LeadingIcon || TrailingIcon ? 'textAndIcon' : 'text',
            disabled,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        <>
          {LeadingIcon ? <LeadingIcon className="-ml-0.5 h-5 w-5" aria-hidden={true} /> : null}
          {children}
          {TrailingIcon ? <TrailingIcon className="-mr-0.5 h-5 w-5" aria-hidden={true} /> : null}
        </>
      </Comp>
    )
  }
)
Button.displayName = 'Button'
