import React, { forwardRef } from 'react'
import { ButtonProps, buttonStyles, SVGComponent } from './button'

type IconButtonProps = Omit<ButtonProps, 'rounded' | 'leadingIcon' | 'trailingIcon' | 'children'> & {
  icon: SVGComponent
}
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, intent, sizes, disabled, className, ...props }: IconButtonProps, ref) => {
    return (
      <button
        className={buttonStyles({
          intent,
          className: 'w-fit',
          sizes,
          disabled,
          _content: 'icon',
          rounded: 'full',
        })}
        {...props}
        ref={ref}
      >
        <Icon className="w-5 h-5" aria-hidden="true" />
      </button>
    )
  }
)
IconButton.displayName = 'IconButton'
export default IconButton
