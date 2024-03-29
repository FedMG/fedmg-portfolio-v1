import { addId } from '@/functions/tools'

/* eslint-disable */
import passwordGenerator from '/password-generator-25.webp'
import passwordGeneratorMedium from '/password-generator-50.webp'
import passwordGeneratorSmaller from '/password-generator-75.webp'
import romanNumbers from '/roman-numbers-25.webp'
import romanNumberMedium from '/roman-numbers-50.webp'
import romanNumberSmaller from '/roman-numbers-75.webp'
import commingSoon from '/comming-soon-25.webp'
import commingSoonMedium from '/comming-soon-50.webp'
import commingSoonSmaller from '/comming-soon-75.webp'
/* eslint-disable */

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
        svg: {
          d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
          style: 'project-svg-styles',
        }
      },
      {
        id: 2,
        name: 'Open web',
        link: webLink,
        svg: {
          d: openPagePath,
          style: 'project-svg-styles project-svg-styles-open-icon',
          fill: 'none'
        }
      }
    ]
  }
}

const getSourceSize = (original, medium, smaller) => {
  return `${smaller} 500w, ${medium} 1000w, ${original} 1500w`
}


const tech = {
  ['css']: ['CSS', '#1572B6'],
  ['html']:['HTML', '#E34F26'],
  ['js']: ['Javascript', '#F7DF1E'],
  ['react']: ['React', '#61DAFB'],
  ['node']: ['NodeJS', '#339933'],
  ['ts']: ['Typescript', '#3178C6'],
  ['testing']: ['Testing Library', '#E33332'],
  ['jest']: ['Jest', '#C21325'],
  ['express']: ['Express', '#000000'],
  ['mongo']: ['MongoDB', '#47A248'], 
  ['mongoose']: ['Mongoose', '#800'],
  ['styled']:['Styled components', '#DB7093'],
  ['tw']:['Tailwind', '#06B6D4'],
  ['mantine']:['Mantine', '#349af0'],
  ['pg']: ['PostgreSQL', '#4169E1'],
  ['prisma']: ['Prisma', '#2D3748'],
  ['next']:['Next.js', '#000000'],
  ['nextauth']: ['Next-Auth', '#a553b3'],
  ['jwt']: ['JWT', '#000000'],
  ['redis']: ['Redis', '#DC382D'],
  ['python']: ['Python', '#3776AB'],
  ['aws']: ['AWS', '#232F3E']
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
        ),
        description: 'One of my first projects, simple, but I learned many things, for example: how to deploy a project to production, and how to organize the requirements to build the required algorithm.',
        badges: [tech['html'], tech['styled'], tech['js'], tech['react']],
      },
      {
        caption: 'Password Generator',
        source: passwordGenerator,
        srcSet: getSourceSize(passwordGenerator, passwordGeneratorMedium, passwordGeneratorSmaller),
        ...getLinkButtons(
          'midudev/password-generator/tree/main/src/components/fedmg',
          'https://hacktoberfest-2022.vercel.app/entry/fedmg'
        ),
        description: 'A challenge from Midudev to build a password generator without any component library. My first OS project, where I learned about Astro, how to use localstore, how to work on an OS project in the community, how to make better PRs and how to fix bugs in production.',
        badges: [tech['html'], tech['css'], tech['js'], tech['react']],
      },
      {
        caption: 'E-commerce',
        source: commingSoon,
        srcSet: getSourceSize(commingSoon, commingSoonMedium, commingSoonSmaller),
        ...getLinkButtons('FedMG/e-commerce-monolithic-tsx-node-mgdb', '#'),
        description: 'I have learned many things, for example: how to implement SSR, how to build a Store API with CRUD methods and user-auth logic (Register and Login) and consume it in a monolithic architecture and much more.',
        badges: [tech['html'], tech['mantine'], tech['js'], tech['react'], tech['next'], tech['ts'], tech['node'], tech['express'], tech['jwt'], ,tech['mongo'], tech['mongoose'], tech['jest'], tech['testing']]
      },
      {
        caption: 'Soon',
        source: commingSoon,
        srcSet: getSourceSize(commingSoon, commingSoonMedium, commingSoonSmaller),
        ...getLinkButtons('FedMG/e-commerce-project-', '#'),
        description: 'Next project...',
        badges: [tech['html'], tech['tw'], tech['react'], tech['next'],tech['nextauth'], tech['ts'], tech['node'], tech['express'], tech['pg'], tech['prisma'], tech['jest'], tech['testing']]
        }
    ])
  }
]
