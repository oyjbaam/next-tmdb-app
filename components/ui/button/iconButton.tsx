import React, { forwardRef } from 'react'
import { ButtonProps, buttonStyles, SVGComponent } from './button'
import { cn } from '@/shared/util/twMerge'
type IconButtonProps = Omit<ButtonProps, 'rounded' | 'leadingIcon' | 'trailingIcon' | 'children'> & {
  icon: SVGComponent
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, intent, sizes, disabled, className, ...props }: IconButtonProps, ref) => {
    return (
      <button
        className={cn(
          buttonStyles({
            intent,
            className: 'w-fit',
            sizes,
            disabled,
            _content: 'icon',
            rounded: 'full',
          }),
          className
        )}
        {...props}
        ref={ref}
      >
        <Icon className="w-5 h-5" aria-hidden="true" />
      </button>
    )
  }
)
IconButton.displayName = 'IconButton'
