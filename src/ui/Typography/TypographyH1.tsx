interface TypographyH1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

export const TypographyH1 = ({ children, className = '' }: TypographyH1Props) => {
  return <h1 className={className}>{children}</h1>
}
