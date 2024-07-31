import React from 'react'
interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  style?: React.CSSProperties
}
export const Title: React.FC<TitleProps> = ({ children, style, ...props }) => {
  return (
    <div style={style} {...props}>
      {children}
    </div>
  )
}
