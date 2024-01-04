import Link from "next/link"
import { notFound } from "next/navigation"
import { allProjects } from "contentlayer/generated"
import { formatDistance, subDays } from "date-fns"

export default async function ProjectsPage() {
  if (!allProjects) {
    notFound()
  }

  return (
    <div className="fade-siblings-on-hover flex flex-col gap-6">
      {allProjects.map((project) => (
        <article
          key={project._id}
          className="bg-card w-full transition-all duration-500 lg:hover:scale-125"
        >
          <Link href={project.slug} className="flex h-full flex-col p-10">
            <small className="mb-10 flex-1">
              {formatDistance(subDays(project.date, 3), new Date(), {
                addSuffix: true,
              })}
            </small>
            <h2 className="mb-2 text-3xl">{project.title}</h2>
            {project.description && <p>{project.description}</p>}
          </Link>
        </article>
      ))}
    </div>
  )
}
