'use client'

import { useUnit } from 'effector-react'
import translationsJson from '@/shared/lib/translations/translations.json'
import { $lang } from '@/shared/model/lang'

export const useLang = () => {
  const lang = useUnit($lang)
  const translations = translationsJson

  return { lang, translations }
}
