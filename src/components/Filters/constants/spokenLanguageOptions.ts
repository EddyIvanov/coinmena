import { IFilter } from '../types'

export const SPOKEN_LANGUAGE_OPTIONS: IFilter = {
  label: 'Spoken language:',
  name: 'spoken_language_code',
  options: [
    {
      name: 'Any',
      value: '',
    },
    {
      name: 'English',
      value: 'en',
    },
    {
      name: 'Chinese',
      value: 'zh',
    },
  ],
}
