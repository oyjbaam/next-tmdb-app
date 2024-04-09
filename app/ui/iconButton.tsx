import React from 'react'
import { ButtonProps, buttonStyles, SVGComponent } from './button'

type IconButtonProps = Omit<ButtonProps, 'rounded' | 'leadingIcon' | 'trailingIcon' | 'children'> & {
  icon: SVGComponent
}
const IconButton = ({ icon: Icon, intent, sizes, disabled, className, ...props }: IconButtonProps) => {
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
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
    </button>
  )
}

export default IconButton
