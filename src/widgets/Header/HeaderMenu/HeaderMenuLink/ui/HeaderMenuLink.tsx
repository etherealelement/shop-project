import { useLang } from '@/shared/lib/hooks/useLang/useLang'
import Link from 'next/link'
import { FC } from 'react'

type props = {
  item: {
    id: number
    text: string
    href: string
  }
  handleRedirectToCatalog: (arg0: string) => void
}

export const HeaderMenuLink: FC<props> = ({
  handleRedirectToCatalog,
  item,
}): JSX.Element => {
  const onRedirect = () => handleRedirectToCatalog(item.href)

  return (
    <li>
      <Link
        href={item.href}
        onClick={onRedirect}
        className='nav-menu__accordion__item__list__item__link'
      >
        {item.text}
      </Link>
    </li>
  )
}
