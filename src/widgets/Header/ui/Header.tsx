'use client'

import { FC, use, useCallback } from 'react'
import styles from './Header.module.css'
import { Action } from './icons/Action'
import { Cart } from './icons/Cart'
import { Favorites } from './icons/Favorites'
import { Logo } from './icons/Logo'
import { Search } from './icons/Search'
import { Burger } from './icons/Burger'
import { User } from './icons/User'
import Link from 'next/link'
import { HeaderMenu } from '@/widgets/Header/HeaderMenu'
import { closeMenu, openMenu } from '@/shared/model/modals'
import {
  addOverflowHiddenToBody,
  removeOverflowHiddenToBody,
} from '@/shared/lib/utils/common'
import { useLang } from '@/shared/lib/hooks/useLang/useLang'
type HeaderProps = {
  isMobile: boolean
}

export const Header: FC<HeaderProps> = ({ isMobile }): JSX.Element => {
  const NavItems = isMobile
    ? [Search, User]
    : [Action, Cart, Favorites, Search, User]

  const handleOpenMenu = useCallback(() => {
    addOverflowHiddenToBody()
    openMenu()
  }, [])

  const { lang, translations } = useLang()

  return (
    <header className={styles.header}>
      <div className='container'>
        <ul className={styles.headerInner}>
          <li className={styles.headerMenu}>
            <button className={styles.headerMenuBtn} onClick={handleOpenMenu}>
              <Burger />
              {translations[lang].header.menu_btn}
            </button>
            <HeaderMenu></HeaderMenu>
          </li>
          <li className={styles.headerLogo}>
            <Link href={'/'}>
              <Logo />
            </Link>
          </li>
          <li className={styles.headerNav}>
            <nav>
              <ul className={styles.headerNavList}>
                {NavItems.map((Item, id) => (
                  <li className={styles.headerNavListItem} key={id}>
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
