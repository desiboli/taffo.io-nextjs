import Link from "next/link"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { formatDistance, subDays } from "date-fns"

export default async function PostsPage() {
  if (!allPosts) {
    notFound()
  }

  return (
    <div className="fade-siblings-on-hover flex flex-col gap-6">
      {allPosts.map((post, index) => (
        <article
          key={post._id}
          className="bg-card w-full transition-all duration-500 lg:hover:scale-125"
        >
          <Link href={post.slug} className="flex h-full flex-col p-10">
            <small className="mb-10 flex-1">
              {formatDistance(subDays(post.published, 3), new Date(), {
                addSuffix: true,
              })}
            </small>
            <h2 className="mb-2 text-3xl">{post.title}</h2>
            {post.description && <p>{post.description}</p>}
          </Link>
        </article>
      ))}
    </div>
  )
}
