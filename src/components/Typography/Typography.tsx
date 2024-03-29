import { VariantProps, cva } from 'class-variance-authority'

const textVariants = cva('text-gray-primary text-sm font-normal', {
  variants: {
    variant: {
      primary: 'text-gray-primary',
      secondary: 'text-gray-secondary',
      tertiary: 'text-gray-tertiary',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      xl: 'text-xl',
      title1: 'text-txl',
      title2: 'text-tlg',
      title3: 'text-tmd',
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
})

export type TypographyProps = VariantProps<typeof textVariants> & {
  children: React.ReactNode
  element?: keyof JSX.IntrinsicElements
} & JSX.IntrinsicElements['p']

export default function Typography({
  children,
  element = 'p',
  className,
  ...rest
}: TypographyProps) {
  const Element = element as any
  return (
    <Element className={`${textVariants(rest)} ${className}`} {...rest}>
      {children}
    </Element>
  )
}
