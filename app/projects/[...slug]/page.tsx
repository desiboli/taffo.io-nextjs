import { notFound } from "next/navigation"
import { allProjects, Project } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

interface projectProps {
  params: {
    slug: string[]
  }
}

async function getprojectFromParams(params: projectProps["params"]) {
  const slug = params?.slug?.join("/")
  const project = allProjects.find(
    (project: Project) => project.slugAsParams === slug
  )

  if (!project) {
    null
  }

  return project
}

export default async function ProjectPage({ params }: projectProps) {
  const project = await getprojectFromParams(params)

  if (!project) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert py-6">
      <h1 className="mb-2">{project.title}</h1>
      {project.description && (
        <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
          {project.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={project.body.code} />
    </article>
  )
}
