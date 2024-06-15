import React, { forwardRef } from 'react'
import { ButtonProps, buttonStyles, SVGComponent } from './button'
import { cn } from '@/shared/util/twMerge'
import { Slot } from '@radix-ui/react-slot'

type IconButtonProps = Omit<ButtonProps, 'rounded' | 'leadingIcon' | 'trailingIcon'> & {
  icon?: SVGComponent
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, intent, sizes, disabled, className, children, asChild, ...props }: IconButtonProps, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
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
        {children ? children : Icon && <Icon className="w-5 h-5" aria-hidden="true" />}
      </Comp>
    )
  }
)
IconButton.displayName = 'IconButton'
