import Link from "next/link"
import { allProjects } from "contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"

export default function RecentProjects() {
  return (
    <div className="fade-siblings-on-hover mb-20 flex flex-col gap-6">
      {allProjects
        .slice()
        .sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)))
        .slice(0, 5)
        .map((post) => (
          <article
            key={post._id}
            className="bg-card w-full transition-all duration-500 lg:hover:scale-125"
          >
            <Link href={post.slug} className="flex h-full flex-col p-10">
              <small className="mb-10 flex-1 capitalize">
                {format(post.date, "MMMM d, yyyy")}
              </small>
              <h2 className="mb-2 text-3xl">{post.title}</h2>
              {post.description && <p>{post.description}</p>}
            </Link>
          </article>
        ))}
      <Link
        href="/projects"
        className="bg-card flex w-full items-center justify-center p-20 font-bold transition-all duration-500 lg:hover:scale-125"
      >
        All projects
      </Link>
    </div>
  )
}
