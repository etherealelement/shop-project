import { useEffect, useState } from 'react'

const getWindowWidth = () => {
  if (typeof window !== 'undefined') {
    const { innerWidth } = window
    return innerWidth
  } else {
    return 0
  }
}

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())
  const handleWindowResize = () => {
    setWindowWidth(getWindowWidth())
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
  }, [windowWidth, setWindowWidth])

  return { windowWidth, handleWindowResize }
}
