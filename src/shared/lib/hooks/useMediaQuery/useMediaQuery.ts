import { useEffect, useState } from 'react'
import { useWindowWidth } from '../useWindowWidth'

export const useMediaQuery = (maxWidth: number) => {
  const { windowWidth, handleWindowResize } = useWindowWidth()

  const [isMedia, setIsMedia] = useState(false)

  useEffect(() => {
    if (innerWidth <= maxWidth) {
      setIsMedia(true)
    } else {
      setIsMedia(false)
    }
  }, [windowWidth, handleWindowResize, maxWidth])
  return isMedia
}
