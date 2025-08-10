import { useEffect, useState } from 'react'

export const useCheckScreen = () => {
  const [isSmallScreen, setIsScmallScreen] = useState(false)
  const [isMediumScreen, setIsMediumScreen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsScmallScreen(window.innerWidth >= 320 && window.innerWidth <= 425)
      setIsMediumScreen(window.innerWidth >= 426 && window.innerWidth <= 768)
      setIsLargeScreen(window.innerWidth > 1440)
      setIsFullScreen(window.innerWidth === 2560)
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)

    return () => {
      window.removeEventListener('resize', checkScreen)
    }
  }, [])

  return {
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isFullScreen,
  }
}
