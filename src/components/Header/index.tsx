import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Input } from '../../ui/Input/input'
import { TypographyH1 } from '../../ui/Typography/TypographyH1'
import { HeaderProps } from '../../types'

export const Header: React.FC<HeaderProps> = ({ title, onChange, value, placeholder }) => {
  const location = useLocation()

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <header className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-700/40 dark:border-gray-800 px-4 sm:px-6 py-3">
        <div className="flex items-center min-w-[120px]">
          {location.pathname !== '/' && (
            <Link to="/" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:underline">
              <ArrowLeft size={18} />
              Voltar
            </Link>
          )}
        </div>

        <div className="flex-1 flex justify-center">
          <TypographyH1 className="text-black text-lg sm:text-xl font-bold dark:text-white">{title}</TypographyH1>
        </div>

        <div className="flex justify-end min-w-[120px]">
          {location.pathname === '/' && (
            <Input type="text" value={value} onChange={onChange} placeholder={placeholder} />
          )}
        </div>
      </header>
    </div>
  )
}
