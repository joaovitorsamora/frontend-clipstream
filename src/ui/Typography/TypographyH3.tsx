interface TypographyH3Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
}

export const TypographyH3 = ({ children, className = '' }: TypographyH3Props) => {
  return <h3 className={className}>{children}</h3>
}
