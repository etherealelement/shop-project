import { FC } from 'react'
import { HeaderAccordion } from '../../../HeaderAccordion'
import { HeaderMenuLink } from '../../../HeaderMenuLink/ui/HeaderMenuLink'

type props = {
  title: string
  links: link[]
  handleRedirectToCatalog: (path: string) => void
}

type link = {
  id: number
  text: string
  href: string
}
export const HeaderMenuItem: FC<props> = ({
  handleRedirectToCatalog,
  links,
  title,
}): JSX.Element => {
  return (
    <li className='nav-menu__accordion__item'>
      <HeaderAccordion
        title={title}
        titleClass='btn-reset nav-menu__accordion__item__title'
      >
        <ul className='list-reset nav-menu__accordion__item__list'>
          {links.map((item) => {
            return (
              <HeaderMenuLink
                key={item.id}
                item={item}
                handleRedirectToCatalog={handleRedirectToCatalog}
              ></HeaderMenuLink>
            )
          })}
        </ul>
      </HeaderAccordion>
    </li>
  )
}
