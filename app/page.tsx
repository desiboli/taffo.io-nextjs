import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

import { ThemeToggle } from "@/components/ThemeToggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="my-6">
        <ThemeToggle />
      </div>

      <div className="prose dark:prose-invert">
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </main>
  )
}
