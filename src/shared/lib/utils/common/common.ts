export const addOverflowHiddenToBody = () => {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.add('overflow-hidden')
}

export const removeOverflowHiddenToBody = () => {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.remove('overflow-hidden')
}
