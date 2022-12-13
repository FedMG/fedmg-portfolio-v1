import passwordGenerator from '@/assets/password-generator.png'
import passwordGeneratorMedium from '@/assets/password-generator-50-smaller.png'
import passwordGeneratorSmaller from '@/assets/password-generator-75-smaller.png'
import romanNumbers from '@/assets/roman-numbers.png'
import romanNumberMedium from '@/assets/roman-numbers-50-smaller.png'
import romanNumberSmaller from '@/assets/roman-numbers-75-smaller.png'

import { addId, createSVGObject } from '@/functions/tools'
import { githubPath } from './buttons'

const openPagePath = [
  { id: 1, d: 'M17 2H22V7' },
  {
    id: 2,
    d: 'M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11'
  },
  { id: 3, d: 'M13 11L21.5 2.5' }
]

const getLinkButtons = (githubRepo, webLink) => {
  return {
    buttons: [
      {
        id: 1,
        name: 'Github',
        link: `https://github.com/${githubRepo}`,
        ...createSVGObject(
          'Github',
          githubPath,
          'svg-dimensions',
          'project-svg-styles'
        )
      },
      {
        id: 2,
        name: 'Open web',
        link: webLink,
        ...createSVGObject(
          'Open',
          openPagePath,
          'svg-dimensions',
          'project-svg-styles project-svg-styles-open-icon',
          false
        )
      }
    ]
  }
}

const getSourceSize = (original, medium, smaller) => {
  return `${smaller} 500w, ${medium} 1000w, ${original} 1500w`
}

export const projects = [
  {
    id: 1,
    board: addId([
      {
        caption: 'Roman numbers',
        source: romanNumbers,
        srcSet: getSourceSize(romanNumbers, romanNumberMedium, romanNumberSmaller),
        ...getLinkButtons(
          'FedMG/roman-numbers',
          'https://roman-numbers-xi.vercel.app/'
        )
      },
      {
        caption: 'Password Generator',
        source: passwordGenerator,
        srcSet: getSourceSize(passwordGenerator, passwordGeneratorMedium, passwordGeneratorSmaller),
        ...getLinkButtons(
          'midudev/password-generator/tree/main/src/components/fedmg',
          'https://hacktoberfest-2022.vercel.app/entry/fedmg'
        )
      },
      {
        caption: 'Soon',
        source: romanNumbers,
        srcSet: getSourceSize(romanNumbers, romanNumberMedium, romanNumberSmaller),
        ...getLinkButtons('FedMG', ' ')
      },
      {
        caption: 'Soon',
        source: passwordGenerator,
        srcSet: getSourceSize(passwordGenerator, passwordGeneratorMedium, passwordGeneratorSmaller),
        ...getLinkButtons('FedMG', ' ')
      }
    ])
  }
] /*
  {
    id: 2,
    board: addId([
      {
        caption: 'Weather App',
        source: romanNumbers,
        srcSet: getSourceSize(romanNumbers, romanNumberMedium, romanNumberSmaller),
        ...getLinkButtons('FedMG', ' ')
      },
      {
        caption: 'Palindrome',
        source: passwordGenerator,
        srcSet: getSourceSize(passwordGenerator, passwordGeneratorMedium, passwordGeneratorSmaller),
        ...getLinkButtons('FedMG', ' ')
      },
      {
        caption: 'Cypher App',
        source: romanNumbers,
        srcSet: getSourceSize(romanNumbers, romanNumberMedium, romanNumberSmaller),
        ...getLinkButtons('FedMG', ' ')
      },
      {
        caption: 'Tribute Page',
        source: passwordGenerator,
        srcSet: getSourceSize(passwordGenerator, passwordGeneratorMedium, passwordGeneratorSmaller),
        ...getLinkButtons('FedMG', ' ')
      }
    ])
  }
]
*/
