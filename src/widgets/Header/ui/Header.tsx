import { FC } from 'react'
import styles from './Header.module.css'
import { Action } from './icons/Action'
import { Cart } from './icons/Cart'
import { Favorites } from './icons/Favorites'
import { Logo } from './icons/Logo'
import { Search } from './icons/Search'
import { Burger } from './icons/Burger'
import { User } from './icons/User'
import Link from 'next/link'
type HeaderProps = {
  isMobile: boolean
}

export const Header: FC<HeaderProps> = ({ isMobile }): JSX.Element => {
  const NavItems = isMobile
    ? [Search, User]
    : [Action, Cart, Favorites, Search, User]

  return (
    <header className={styles.header}>
      <div className='container'>
        <ul className={styles.headerInner}>
          <li className={styles.headerMenu}>
            <Burger />
            Меню
          </li>
          <li className={styles.headerLogo}>
            <Link href={'/'}>
              <Logo />
            </Link>
          </li>
          <li className={styles.headerNav}>
            <nav>
              <ul className={styles.headerNavList}>
                {NavItems.map((Item) => (
                  <li className={styles.headerNavListItem}>
                    <Item key={Item.name} />
                  </li>
                ))}
              </ul>
            </nav>
          </li>
        </ul>
      </div>
    </header>
  )
}
