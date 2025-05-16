import { P5Sketch } from '../P5Sketch'
import { Title } from '../Title'
import { Input } from '../Input'
import MenuIcon from '@mui/icons-material/Menu'
import { HeaderProps } from '@/src/types'
import './styles.css'

export const Header: React.FC<HeaderProps> = ({ title, onChange, value, placeholder }) => {
  return (
    <header className="header-container">
      <P5Sketch>
        <MenuIcon className="menu-icon" />
        <Title level={3} className="video-title">
          {title}
        </Title>
        <Input onChange={onChange} value={value} placeholder={placeholder} />
      </P5Sketch>
    </header>
  )
}
