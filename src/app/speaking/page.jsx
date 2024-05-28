import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Speaking',
  description:
    'Manifesting a speaking portion for my web portfolio soon.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Manifesting a speaking portion for my web portfolio soon :)"
      intro="One of my aspirations is to share my ideas live on stage, where the communication bandwidth is so much greater than in writing. I'm also looking forward to participating in podcast interviews, as they provide the opportunity to engage in dynamic discussions and answer questions rather than just presenting my opinions. Stay tuned for updates on my speaking experiences soon!"
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
          <Appearance
            href="#"
            title="Manifesting Future Speaking Engagements"
            description="I am eager to step onto the stage and share my insights at conferences around the world. Stay tuned for updates as I embark on this journey to engage with diverse audiences and contribute to thought-provoking discussions in the field of data engineering."
            event="Conference Title -  Conference Year"
            cta="Watch video"
          />
        </SpeakingSection>
        <SpeakingSection title="Podcasts">
          <Appearance
            href="#"
            title="Manifesting Future Podcast Appearances"
            description="I am excited about the prospect of sharing my expertise and engaging in meaningful conversations through podcast interviews. Stay tuned for updates as I explore opportunities to discuss data engineering, technology, and innovation with a broader audience."
            event="Podcast Title -  Podcast Year"
            cta="Listen to podcast"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
