import { FC } from 'react'

export const Burger: FC = (): JSX.Element => {
  return (
    <div>
      <svg
        width='20'
        height='14'
        viewBox='0 0 20 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M20 0.25H0V1.75H20V0.25ZM0 6.25H20V7.75H0V6.25ZM0 12.25H20V13.75H0V12.25Z'
          fill='#E8E9EA'
        />
      </svg>
    </div>
  )
}
