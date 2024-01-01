import Link from "next/link"
import { notFound } from "next/navigation"
import { allPosts, Post } from "contentlayer/generated"
import { formatDistance, subDays } from "date-fns"

import { Mdx } from "@/components/MdxComponents"

interface PostProps {
  params: {
    slug: string[]
  }
}

// async function getPostFromParams(params: PostProps["params"]) {
//   const slug = params?.slug?.join("/")
//   const post = allPosts.find((post: Post) => post.slugAsParams === slug)

//   if (!post) {
//     null
//   }

//   return post
// }

export default async function PostsPage({ params }: PostProps) {
  if (!allPosts) {
    notFound()
  }

  return (
    <>
      {allPosts.map((post, index) => (
        <article
          key={post._id}
          className="bg-card w-full transition-all even:mt-8 hover:scale-110"
        >
          <Link href={post.slug} className="flex h-full flex-col p-10">
            <small className="mb-10 flex-1">
              {formatDistance(subDays(post.date, 3), new Date(), {
                addSuffix: true,
              })}
            </small>
            <h2 className="mb-2 text-3xl">{post.title}</h2>
            {post.description && <p>{post.description}</p>}
          </Link>
        </article>
      ))}
    </>
  )
}
