import { cn } from '@/shared/util/twMerge'
import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, HTMLAttributes } from 'react'

export const flexBoxStyles = cva('flex', {
  variants: {
    flexDirection: {
      col: 'flex-col',
      row: 'flex-row',
      colReverse: 'flex-col-reverse',
      rowReverse: 'flex-row-reverse',
    },
    alignItems: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      base: 'items-baseline',
      stretch: 'items-stretch',
    },
    justifyContent: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
  },
  defaultVariants: {
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'start',
  },
})

type FlexBoxProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof flexBoxStyles>

const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ className, justifyContent, flexDirection, alignItems, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(flexBoxStyles({ className, justifyContent, flexDirection, alignItems }))}
      />
    )
  }
)
FlexBox.displayName = 'FlexBox'

export default FlexBox
