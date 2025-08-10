'use client'
import React from 'react'
import { Input } from '../../ui/Input/input'
import { TypographyH1 } from '../../ui/Typography/TypographyH1'
import { HeaderProps } from '../../types'

export const Header: React.FC<HeaderProps> = ({ title, onChange, value, placeholder }) => {
  return (
    <div className="mx-auto flex" style={{ maxWidth: 'clamp(42rem,60vw,64rem)' }}>
      <header className="w-full flex items-center justify-between px-[clamp(1rem,4vw,2rem)] py-[clamp(0.5rem,2vw,1.5rem)] rounded-xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-700/40 dark:border-gray-800">
        <TypographyH1 className="text-black text-xl font-bold dark:text-white">{title}</TypographyH1>
        <div className="w-1/2">
          <Input type="text" value={value} onChange={onChange} placeholder={placeholder} />
        </div>
      </header>
    </div>
  )
}
