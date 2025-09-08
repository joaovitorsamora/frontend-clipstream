interface TypographyPprops extends React.HTMLAttributes<HTMLElement> {
  text: string
  className?: string
}

export const TypographyP = ({ text = '', className = '', ...props }: TypographyPprops) => {
  return (
    <p className={className} {...props}>
      {text}
    </p>
  )
}
