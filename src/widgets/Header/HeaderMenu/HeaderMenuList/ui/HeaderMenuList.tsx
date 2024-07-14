import { FC } from 'react'
import clsx from 'classnames'
import { useUnit } from 'effector-react'
import { $menuIsOpen } from '@/shared/model/modals'
import { useLang } from '@/shared/lib/hooks/useLang/useLang'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './HeaderMenuList.module.css'
import { HeaderMenuItem } from '../HeaderMenuItem'
type props = {
  isMedia800: boolean
  isMedia450: boolean
  showCatalogList: boolean
  showBuyersList: boolean
  showContactsList: boolean
  handleRedirectToCatalog: (path: string) => void
  handleShowCatalogList: () => void
  handleShowBuyersList: () => void
  handleShowContactsList: () => void
}

export const HeaderMenuList: FC<props> = ({
  showCatalogList,
  handleRedirectToCatalog,
  handleShowCatalogList,
  showBuyersList,
  showContactsList,
  handleShowBuyersList,
  handleShowContactsList,
  isMedia450,
  isMedia800,
}): JSX.Element => {
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations } = useLang()
  const menuItems = [
    {
      text: 'catalog',
      visible: showCatalogList,
      handler: handleShowCatalogList,
    },
    {
      text: 'buyers',
      visible: showBuyersList,
      handler: handleShowBuyersList,
    },
  ]

  const clothLinks = [
    {
      id: 1,
      text: translations[lang].comparison['t-shirts'],
      href: '/catalog/cloth?offset=0&type=t-shirts',
    },
    {
      id: 2,
      text: translations[lang].comparison['long-sleeves'],
      href: '/catalog/cloth?offset=0&type=long-sleeves',
    },
    {
      id: 3,
      text: translations[lang].comparison.hoodie,
      href: '/catalog/cloth?offset=0&type=hoodie',
    },
    {
      id: 4,
      text: translations[lang].comparison.outerwear,
      href: '/catalog/cloth?offset=0&type=outerwear',
    },
  ]

  const accessoriesLinks = [
    {
      id: 1,
      text: translations[lang].comparison.bags,
      href: '/catalog/accessories?offset=0&type=bags',
    },
    {
      id: 2,
      text: translations[lang].comparison.headdress,
      href: '/catalog/accessories?offset=0&type=headdress',
    },
    {
      id: 3,
      text: translations[lang].comparison.umbrella,
      href: '/catalog/accessories?offset=0&type=umbrella',
    },
  ]

  const souvenirsLinks = [
    {
      id: 1,
      text: translations[lang].comparison['business-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=business-souvenirs',
    },
    {
      id: 2,
      text: translations[lang].comparison['promotional-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=promotional-souvenirs',
    },
  ]

  const officeLinks = [
    {
      id: 1,
      text: translations[lang].comparison.notebook,
      href: '/catalog/office?offset=0&type=notebook',
    },
    {
      id: 2,
      text: translations[lang].comparison.pen,
      href: '/catalog/office?offset=0&type=pen',
    },
  ]

  const buyersLinks = [
    {
      id: 1,
      text: translations[lang].main_menu.about,
      href: '/about',
    },
    {
      id: 2,
      text: translations[lang].main_menu.blog,
      href: '/blog',
    },
    {
      id: 3,
      text: translations[lang].main_menu.shipping,
      href: '/shipping-and-payment',
    },
    {
      id: 4,
      text: translations[lang].main_menu.returns,
      href: '/purchase-returns',
    },
  ]

  return (
    <ul
      className={clsx({
        [styles.navMenuList]: true,
        'list-reset nav-menu__list open': menuIsOpen,
      })}
    >
      {menuItems.map((item, id) => {
        return (
          !isMedia800 && (
            <li key={id} className={styles.navMenuListItem}>
              <button
                className='btn-reset nav-menu__list__item__btn'
                onMouseEnter={item.handler}
              >
                {translations[lang].main_menu[item.text]}
              </button>
              <AnimatePresence>
                {item.visible && item.text === 'catalog' && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={clsx({
                      'list-reset nav-menu__accordion': true,
                      'catalog-list': showCatalogList,
                      'buyers-list': showBuyersList,
                      'contacts-list': showContactsList,
                    })}
                  >
                    <HeaderMenuItem
                      handleRedirectToCatalog={handleRedirectToCatalog}
                      links={clothLinks}
                      title={translations[lang].main_menu.cloth}
                    ></HeaderMenuItem>
                    <HeaderMenuItem
                      handleRedirectToCatalog={handleRedirectToCatalog}
                      links={accessoriesLinks}
                      title={translations[lang].main_menu.accessories}
                    ></HeaderMenuItem>
                    <HeaderMenuItem
                      handleRedirectToCatalog={handleRedirectToCatalog}
                      links={souvenirsLinks}
                      title={translations[lang].main_menu.souvenirs}
                    ></HeaderMenuItem>
                    <HeaderMenuItem
                      handleRedirectToCatalog={handleRedirectToCatalog}
                      links={officeLinks}
                      title={translations[lang].main_menu.office}
                    ></HeaderMenuItem>
                  </motion.ul>
                )}
                {item.visible && item.text === 'buyers' && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset nav-menu__accordion'
                  >
                    <HeaderMenuItem
                      handleRedirectToCatalog={handleRedirectToCatalog}
                      title={translations[lang].main_menu.buyers}
                      links={buyersLinks}
                    ></HeaderMenuItem>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          )
        )
      })}
    </ul>
  )
}
