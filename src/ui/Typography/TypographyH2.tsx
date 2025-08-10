interface TypographyH2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

export const TypographyH2 = ({ children, className = '' }: TypographyH2Props) => {
  return <h2 className={className}>{children}</h2>
}
