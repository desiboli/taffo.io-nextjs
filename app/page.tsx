import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { formatDistance, subDays } from "date-fns"

import { Icons } from "@/components/Icons"
import MainNav from "@/components/main-nav"
import RecentPosts from "@/components/recent-posts"
import RecentProjects from "@/components/recent-projects"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="grid w-full flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
        <aside className="grid h-full max-h-screen grid-flow-row px-6 py-20 lg:sticky lg:left-0 lg:top-0 lg:pl-24">
          <div className="mb-10 max-w-2xl">
            <h1 className="mb-10 text-4xl font-bold lg:text-6xl">
              Hello, I&apos;m <br /> Mustafa Alshammaa
            </h1>
            <p>
              Nulla consequat massa quis enim. Fusce neque. Nulla porta dolor.
              Ut id nisl quis enim dignissim sagittis. Praesent adipiscing.
              Integer tincidunt. Nam commodo suscipit quam. Praesent blandit
              laoreet nibh. In turpis. Sed magna purus, fermentum eu, tincidunt
              eu, varius ut, felis.
            </p>
          </div>
          <MainNav />

          <div className="mt-10 flex items-center gap-6 lg:mt-auto">
            <div className="flex items-center gap-4">
              <Icons.gitHub className="h-4 w-4" />
              <a
                href="https://github.com/desiboli"
                target="_blank"
                className="flex items-center gap-1"
              >
                Github
                <Icons.externalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Icons.xTwitter className="h-4 w-4" />
              <a
                href="https://twitter.com/AdamAlshammaa"
                target="_blank"
                className="flex items-center gap-1"
              >
                Twitter
                <Icons.externalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </aside>
        <section className="px-6 lg:py-20 lg:pr-24">
          <h1 className="mb-10 text-4xl font-bold">Recent Posts</h1>
          <RecentPosts />

          <h1 className="mb-10 text-4xl font-bold">Recent Projects</h1>
          <RecentProjects />

          <h1 className="mb-10 text-4xl font-bold">Recent Snippets</h1>
          <div className="mb-20 flex flex-col gap-8">
            {allPosts.map((post) => (
              <article
                key={post._id}
                className="bg-card w-full transition-all hover:scale-110"
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
            <Link
              href="/posts"
              className="bg-card flex w-full items-center justify-center p-20 font-bold hover:scale-110"
            >
              All snippets
            </Link>
          </div>

          <h1 className="mb-10 text-4xl font-bold">Work</h1>
        </section>
      </div>
    </main>
  )
}
