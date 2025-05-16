import { InputProps } from '@/src/types'
import './styles.css'

export const Input: React.FC<InputProps> = ({ onChange, value, placeholder }) => {
  return (
    <input className="video-input-search" type="text" onChange={onChange} value={value} placeholder={placeholder} />
  )
}
