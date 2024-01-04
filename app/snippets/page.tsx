import Link from "next/link"
import { notFound } from "next/navigation"
import { allSnippets } from "contentlayer/generated"
import { formatDistance, subDays } from "date-fns"

export default async function SnippetsPage() {
  if (!allSnippets) {
    notFound()
  }

  return (
    <div className="fade-siblings-on-hover flex flex-col gap-6">
      {allSnippets.map((snippet) => (
        <article
          key={snippet._id}
          className="bg-card w-full transition-all duration-500 lg:hover:scale-125"
        >
          <Link href={snippet.slug} className="flex h-full flex-col p-10">
            <small className="mb-10 flex-1">
              {formatDistance(subDays(snippet.date, 3), new Date(), {
                addSuffix: true,
              })}
            </small>
            <h2 className="mb-2 text-3xl">{snippet.title}</h2>
            {snippet.description && <p>{snippet.description}</p>}
          </Link>
        </article>
      ))}
    </div>
  )
}
