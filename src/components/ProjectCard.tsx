import type { Media } from '@/payload-types'

type ProjectCardProps = {
  title: string
  description?: string | null
  link?: string | null
  image?:number| Media | null
}

export default function ProjectCard({ title, description, link, image }: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-gray-300 p-4">
      {image && typeof image === 'object' && image.url && (
  <img src={image.url} alt={image.alt} className="w-full rounded-lg mb-4" />
      )}
      <h2 className="text-xl font-semibold">{title}</h2>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-600"
        >
          Открыть
        </a>
      )}
    </div>
  )
}