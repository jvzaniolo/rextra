import { type VariantProps } from 'cva'
import { cva } from '~/utils/misc'

const buttonStyles = cva({
  base: 'inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
  variants: {
    variant: {
      solid: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow',
      outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
      unset: '',
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export function Button({
  variant = 'solid',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={buttonStyles({ variant, className })}
      {...props}
    />
  )
}
