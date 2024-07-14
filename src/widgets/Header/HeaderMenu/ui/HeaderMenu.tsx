'use client'

import { useLang } from '@/shared/lib/hooks/useLang/useLang'
import { $menuIsOpen, closeMenu } from '@/shared/model/modals'
import { useUnit } from 'effector-react'
import { FC, useState } from 'react'
import clsx from 'classnames'
import styles from './HeaderMenu.module.css'
import { removeOverflowHiddenToBody } from '@/shared/lib/utils/common'
import { AllowedLangs, setLang } from '@/shared/model/lang'
import { Logo } from '@/widgets/Header/ui/icons/Logo'
import { HeaderMenuList } from '../HeaderMenuList'
import { usePathname } from 'next/navigation'
import { useMediaQuery } from '@/shared/lib/hooks/useMediaQuery/useMediaQuery'

export const HeaderMenu: FC = (): JSX.Element => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setShowBuyersList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations } = useLang()
  const pathname = usePathname()
  const isMedia800 = useMediaQuery(800)
  const isMedia450 = useMediaQuery(450)

  const handleCloseMenu = () => {
    removeOverflowHiddenToBody()
    closeMenu()
  }

  const handleRedirectToCatalog = (path: string) => {
    if (pathname?.includes('/catalog')) {
      window.history.pushState({ path }, '', path)
      window.location.reload()
    }
    handleCloseMenu()
  }

  const handleShowCatalogList = () => {
    setShowCatalogList(!showCatalogList)
    setShowBuyersList(false)
    setShowContactsList(false)
  }

  const handleShowBuyersList = () => {
    setShowCatalogList(false)
    setShowBuyersList(!showBuyersList)
    setShowContactsList(false)
  }

  const handleShowContactsList = () => {
    setShowCatalogList(false)
    setShowBuyersList(false)
    setShowContactsList(!showContactsList)
  }

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLang('ru')
  const handleSwitchLangToEn = () => handleSwitchLang('en')

  return (
    <nav
      className={clsx({
        'nav-menu open': menuIsOpen,
        'nav-menu close': !menuIsOpen,
      })}
    >
      <div className='container nav-menu__container'>
        <img
          src='/img/menu-bg.png'
          alt='menu-background'
          className={clsx({
            'nav-menu__bg open': menuIsOpen,
            '': !menuIsOpen,
          })}
        />
        <button
          className={clsx({
            'btn-reset nav-menu__close open': menuIsOpen,
            '': !menuIsOpen,
          })}
          onClick={handleCloseMenu}
        ></button>
        <div
          className={clsx({
            [styles.menu]: menuIsOpen,
            open: menuIsOpen,
            '': !menuIsOpen,
          })}
        >
          {' '}
          <div className={styles.menuContainer}>
            <div
              className={clsx({
                open: menuIsOpen,
                '': !menuIsOpen,
              })}
            >
              <Logo></Logo>
            </div>
            <div style={{ zIndex: 5 }}>
              <button
                className={`btn-reset nav-menu__lang__btn ${
                  lang === 'ru' ? 'lang-active' : ''
                }`}
                onClick={handleSwitchLangToRu}
              >
                RU
              </button>
              <button
                className={`btn-reset nav-menu__lang__btn ${
                  lang === 'en' ? 'lang-active' : ''
                }`}
                onClick={handleSwitchLangToEn}
              >
                EN
              </button>
            </div>
          </div>
        </div>
        <div className={styles.catalogList}>
          <HeaderMenuList
            isMedia450={isMedia450}
            isMedia800={isMedia800}
            handleShowBuyersList={handleShowBuyersList}
            handleShowContactsList={handleShowContactsList}
            showBuyersList={showBuyersList}
            showContactsList={showContactsList}
            handleRedirectToCatalog={handleRedirectToCatalog}
            handleShowCatalogList={handleShowCatalogList}
            showCatalogList={showCatalogList}
          />
        </div>
      </div>
    </nav>
  )
}
