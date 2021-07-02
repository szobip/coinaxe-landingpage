import en from '../lang/en.js'
import pl from '../lang/pl.js'

export const API_ROOT = ''

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'pl',
      iso: 'pl-PL',
      name: 'Poland'
    },
 
  ],
  defaultLocale: 'en',
  routes: {
 
  },
  vueI18n: {
    messages: { en, pl }
  }
}