import { notFound } from "next/navigation"
import { allSnippets, Snippet } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

interface snippetProps {
  params: {
    slug: string[]
  }
}

async function getsnippetFromParams(params: snippetProps["params"]) {
  const slug = params?.slug?.join("/")
  const snippet = allSnippets.find(
    (snippet: Snippet) => snippet.slugAsParams === slug
  )

  if (!snippet) {
    null
  }

  return snippet
}

export default async function SnippetPage({ params }: snippetProps) {
  const snippet = await getsnippetFromParams(params)

  if (!snippet) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert py-6">
      <h1 className="mb-2">{snippet.title}</h1>
      {snippet.description && (
        <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
          {snippet.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={snippet.body.code} />
    </article>
  )
}
