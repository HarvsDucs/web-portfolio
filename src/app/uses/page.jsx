import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: '"Software I use, frameworks I love, and other things I recommend."',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, frameworks I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or libraries I use in order to do some programming. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">

      <ToolsSection title="Main Tech stack">
          <Tool title="Firebase">
          I am most comfortable in using Firebase as a backend for quickly finishing projects.
          </Tool>
          <Tool title="Google Cloud Run">
          I believe that serverless is the best way in deploying your products, Google Cloud Run never fails me in doing so.
          </Tool>
          <Tool title="Flask">
          Flask is one of the easiest ways for me to do some logic behind my code as I am most comfortable in Python as my 
          programming language. Flask is my go-to way in making a Rest API.
          </Tool>
          <Tool title="Tailwind CSS">
          TailwindCSS makes the frontend design for me as a developer, exponentially easier. 
          There are a lot of Tailwind CSS frameworks available for use
          and it takes the responsibility of naming arbitrary classes from me.
          </Tool>
        </ToolsSection>


        <ToolsSection title="Programming Languages">
          <Tool title="Python">
          As a Data Engineer, I use Python extensively for data cleaning, 
analysis, and automation. Leveraging libraries like pandas and 
numpy, I streamline data processing and employ machine learning 
frameworks such as tensorflow and Scikit-learn to build predictive models.
          </Tool>
          <Tool title="C">
          I view C as a starting point. C programming help me understood
          the basics of programming. A lot of programming languages and 
          tools were built on top of C and I think it is crucial to know 
          C in order to be a great programmer.
          </Tool>
          <Tool title="R">
          In my role, I employ R for statistical analysis and data
 visualization, using libraries like dplyr and ggplot2. 
It helps in creating detailed reports and insights from 
complex datasets, enhancing decision-making processes.
          </Tool>
          <Tool title="JavaScript">
          I use JavaScript to develop interactive data dashboards 
and front-end interfaces, enabling real-time data 
visualization and user interaction with data-driven applications. 
This facilitates easier data exploration and accessibility for stakeholders.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Frameworks/Libraries">
          <Tool title="Python & R Libraries">
          Pandas, numpy, tensorflow, Scikit-learn, pytorch, matplotlib, seaborn, flask, Gradio, Stable Baselines, Keras, dplyr
          </Tool>
          <Tool title="API Dev and Version Control">
            REST API, Git, Github, openai API, and many more LLM APIs
          </Tool>
          <Tool title="Frontend Frameworks">
            React, TailwindCSS, HTML, Bootstrap
          </Tool>
          <Tool title="Backend Tools">
            Firebase, SQL, MySQL
          </Tool>
          <Tool title="Low/No Code Tools">
            Airtable, Make, Zapier, Softr, Wordpress
          </Tool>
        </ToolsSection>


        <ToolsSection title="Google Cloud Products">
          <Tool title="Cloud Run">
          I use Google Cloud Run to deploy and manage scalable data processing services and APIs. This allows for seamless handling of data workloads, ensuring efficient processing and availability of data-driven applications.
          </Tool>
          <Tool title="Cloud Storage">
          I utilize Google Cloud Storage for storing large volumes of raw and processed data. It provides a reliable and secure solution for data backup, archival, and access, facilitating smooth data retrieval for analytics and machine learning tasks.
          </Tool>
          <Tool title="Big Query">
          I leverage BigQuery for performing large-scale data analysis and complex queries on massive datasets. It helps in generating actionable insights through efficient and quick processing of data, supporting data-driven decision-making.
          </Tool>
          <Tool title="Google APIs & Services">
            Google Sheets API, Youtube Data API, Solar API
          </Tool>
        </ToolsSection>


        <ToolsSection title="Certificates">
          <Tool title="Mathematics for Machine Learning">
            By Imperial College London<br></br>
            Skills: Machine Learning, Linear Algebra, Statistics
          </Tool>
          <Tool title="Stanford Machine Learning Course ">
            By Stanford University<br></br>
            Skills: Reinforcement Learning, Machine Learning, Deep Learning
          </Tool>
          <Tool title="Data Analysis with R Programming">
            By Coursera<br></br>
            Skills: Data Analysis, R (Programming Language)
          </Tool>
        </ToolsSection>

      </div>
    </SimpleLayout>
  )
}
