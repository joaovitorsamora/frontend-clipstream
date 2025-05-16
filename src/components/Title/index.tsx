import { TitleProps } from '@/src/types'
import React from 'react'

export const Title: React.FC<TitleProps> = ({ level, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return <Tag className={className}>{children}</Tag>
}
