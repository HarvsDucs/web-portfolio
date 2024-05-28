import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Harvey Ducay. I live in Manila, Philippines, where I do Data Engineering.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Harvey Ducay. I live in Manila, Philippines, where I do Data Engineering.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I’ve always been passionate about technology and data. My journey began at a 
            young age when I first started exploring the world of programming. I remember 
            the excitement of writing my first lines of code and the sense of accomplishment 
            that came with solving complex problems.
            </p>
            <p>
            As a student, I was particularly fascinated by the potential of data to drive decisions 
            and innovation. This interest led me to pursue a B.S. in Applied Mathematics with a focus 
            on Data Science at Far Eastern University. During my studies, I honed my skills in Python, 
            data cleaning, and AI integration, laying the foundation for my future career.
            </p>
            <p>
            One of my most memorable experiences was developing an automated system during my 
            tenure at Florida Electric and Solar. This project involved creating API integrations 
            that replaced 40 hours of manual data entry work per week and conducting major data 
            migrations using pandas for data cleaning. Integrating AI into our workflows not only 
            streamlined operations but also significantly enhanced our data-driven decision-making process.
            </p>
            <p>
            Today, as a Data Engineer, I specialize in leveraging AI for process automation and 
            developing advanced data management solutions. My journey has been driven by a passion for 
            technology and a commitment to innovation, and I am excited to continue pushing the boundaries 
            of what’s possible in the field of data engineering.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/haharvs" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://www.instagram.com/haharvss/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/HarvsDucs" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/harvey-ducay-090157253/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:ducs1007@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ducs1007@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
