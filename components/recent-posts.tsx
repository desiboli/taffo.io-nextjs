import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc, formatDistance, parseISO } from "date-fns"

export default function RecentPosts() {
  return (
    <div className="fade-siblings-on-hover mb-20 grid gap-8 lg:grid-cols-2">
      {allPosts
        .slice()
        .sort((a, b) =>
          compareDesc(parseISO(a.published), parseISO(b.published))
        )
        .slice(0, 5)
        .map((post) => (
          <article
            key={post._id}
            className="bg-card w-full transition-all duration-500 lg:even:mt-8 lg:hover:scale-125"
          >
            <Link href={post.slug} className="flex h-full flex-col p-10">
              <small className="mb-10 flex-1 capitalize">
                {formatDistance(post.published, new Date(), {
                  addSuffix: true,
                })}
              </small>
              <h2 className="mb-2 text-3xl">{post.title}</h2>
              {post.description && <p>{post.description}</p>}
            </Link>
          </article>
        ))}
      {allPosts.length > 4 && (
        <Link
          href="/posts"
          className="bg-card flex w-full items-center justify-center p-20 font-bold transition-all duration-500 lg:hover:scale-125"
        >
          All posts
        </Link>
      )}
    </div>
  )
}
