import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'

import bitcoin from '@/images/logos/bitcoin.png'
import google from '@/images/logos/google.svg'
import youtube from '@/images/logos/youtube.svg'
import sun from '@/images/logos/sun.png'
import voice from '@/images/logos/voice.jpg'

const projects = [
  {
    name: 'Google OAuth 2.0',
    description:
      'A flask project applying Google OAuth 2.0 in an actual environment setting.',
    link: { href: 'https://github.com/HarvsDucs/google-oauth-2', label: 'github link' },
    logo: google,
  },
  {
    name: 'Solar Savings Calculator',
    description:
      'An application of Google OAuth 2.0 towards calculating solar savings for residential customers in the U.S.',
    link: { href: 'https://github.com/HarvsDucs/Solar-Savings-Calculator', label: 'github link' },
    logo: sun,
  },
  {
    name: 'TradingView Data Scraping',
    description:
      'Scraping data from TradingView and doing a quick data analysis over the data gathered.',
    link: { href: 'https://github.com/HarvsDucs/TradingView_data_analysis/blob/main/TradingView_Scraping.ipynb', label: 'github link' },
    logo: bitcoin,
  },
  {
    name: 'Speech to Speech AI',
    description:
      'Developing a Speech to Speech AI product out of different API sources.',
    link: { href: 'https://github.com/HarvsDucs/Speech-to-Speech-AI', label: 'github link' },
    logo: voice,
  },
  {
    name: 'Youtube Data Analysis',
    description:
      'Analyzing youtube data through youtube API. A quick data scraping and analysis.',
    link: { href: 'https://github.com/HarvsDucs/Youtube-videos-analysis-through-youtube-API', label: 'github link' },
    logo: youtube,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: "Solutions I've built to transform data into impactful insights.",
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Solutions I've built to transform data into impactful insights."
      intro="I’ve tackled numerous projects throughout my career, but these are the ones I’m most proud of. Many are open-source, so if any catch your eye, feel free to explore the code and contribute with your ideas for enhancements."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
