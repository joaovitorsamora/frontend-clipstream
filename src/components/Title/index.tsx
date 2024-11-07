import React from 'react'
interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}
export const Title: React.FC<TitleProps> = ({ level, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return <Tag className={className}>{children}</Tag>
}
