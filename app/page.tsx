import Link from "next/link"
import { allPosts, allProjects } from "contentlayer/generated"
import {
  compareDesc,
  format,
  formatDistance,
  formatRelative,
  parseISO,
  subDays,
} from "date-fns"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/Icons"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="grid w-full flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
        <aside className="grid h-full max-h-screen grid-flow-row px-6 py-20 lg:sticky lg:left-0 lg:top-0 lg:pl-24">
          <div className="mb-10">
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
          <nav>
            <ol className="custom-number-list flex flex-col gap-6">
              <li className="group flex w-fit items-center before:min-w-4">
                <Link
                  href="/posts"
                  className="flex items-center font-semibold uppercase"
                >
                  <Separator className="mr-4 w-6 transition-all group-hover:w-10" />
                  Recent Posts
                </Link>
              </li>
              <li className="group flex w-fit items-center before:min-w-4">
                <Link
                  href="#"
                  className="flex items-center font-semibold uppercase"
                >
                  <Separator className="mr-4 w-6 transition-all group-hover:w-10" />
                  Projects
                </Link>
              </li>
            </ol>
          </nav>

          <div className="mt-10 flex items-center gap-6 lg:mt-auto">
            <div className="flex items-center gap-4">
              <Icons.gitHub className="h-4 w-4" />
              <a href="#" target="_blank" className="flex items-center gap-1">
                Github
                <Icons.externalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Icons.xTwitter className="h-4 w-4" />
              <a href="#" target="_blank" className="flex items-center gap-1">
                Twitter
                <Icons.externalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </aside>
        <section className="px-6 lg:py-20 lg:pr-24">
          <h1 className="mb-10 text-4xl font-bold">Recent Posts</h1>
          <div className="mb-20 grid gap-8 lg:grid-cols-2">
            {allPosts
              .slice()
              .sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)))
              .slice(0, 5)
              .map((post) => (
                <article
                  key={post._id}
                  className="bg-card w-full transition-all hover:scale-110 lg:even:mt-8"
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
              All posts
            </Link>
          </div>

          <h1 className="mb-10 text-4xl font-bold">Projects</h1>
          <div className="mb-20 flex flex-col gap-8">
            {allProjects
              .slice()
              .sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)))
              .slice(0, 5)
              .map((post) => (
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
              All projects
            </Link>
          </div>

          <h1 className="mb-10 text-4xl font-bold">Snippets</h1>
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
        </section>
      </div>
    </main>
  )
}
