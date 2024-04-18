import React, { forwardRef } from 'react'
import { InputProps, inputStyles } from './input'
import { SVGComponent } from './button'
import { cn } from '../../util/twMerge'

type IconInputProps = InputProps & {
  icon: SVGComponent
}

const IconInput = forwardRef<HTMLInputElement, IconInputProps>(
  ({ icon: Icon, validate, sizes, fullwidth, className, 'aria-label': ariaLabel, ...props }: IconInputProps, ref) => {
    return (
      <div className="relative">
        <span className="sr-only">{ariaLabel}</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Icon className="h-4 w-4 stroke-slate-500 dark:stroke-slate-300" aria-hidden="true" />
        </span>
        <input className={`${cn(inputStyles({ validate, sizes, fullwidth, className }))} pl-8`} ref={ref} {...props} />
      </div>
    )
  }
)
IconInput.displayName = 'IconInput'
export default IconInput
