import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import ProjectCard from '@/components/ProjectCard'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs: projects } = await payload.find({
    collection: 'projects',
  })

  return (
    <main>
      <h1 className=" text-3xl font-bold">Проекты</h1>
      <Link href="/about" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
        About
      </Link>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image as any}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

