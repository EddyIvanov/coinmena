import { IFilter } from '../types'

export const LANGUAGE_OPTIONS: IFilter = {
  label: 'Language:',
  name: 'language',
  options: [
    {
      name: 'Any',
      value: '',
    },
    {
      name: 'C',
      value: 'c',
    },
    {
      name: 'C++',
      value: 'c++',
    },
    {
      name: 'Go',
      value: 'go',
    },
    {
      name: 'HTML',
      value: 'html',
    },
    {
      name: 'Java',
      value: 'java',
    },
    {
      name: 'JavaScript',
      value: 'javascript',
    },
    {
      name: 'Objective-c',
      value: 'objective-c',
    },
    {
      name: 'Python',
      value: 'python',
    },
    {
      name: 'Swift',
      value: 'swift',
    },
    {
      name: 'TpeScript',
      value: 'typescript',
    },
  ],
}
