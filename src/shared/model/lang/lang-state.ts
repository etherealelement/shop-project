'use client'
import { createDomain } from 'effector'

export enum AllowedLangs {
  RU = 'ru',
  EN = 'en',
}

export const lang = createDomain()
export const setLang = lang.createEvent<AllowedLangs>()

export const $lang = lang
  .createStore<AllowedLangs>(AllowedLangs.RU)
  .on(setLang, (_, lang) => lang)
