import Link from "next/link"

import { Separator } from "./ui/separator"

export default function MainNav() {
  return (
    <nav>
      <ol className="custom-number-list flex flex-col gap-6">
        <li className="group flex w-fit items-center before:min-w-4">
          <Link
            href="/posts"
            className="flex items-center font-semibold uppercase"
          >
            <Separator className="mr-4 w-6 transition-all group-hover:w-10 group-hover:bg-white" />
            Posts
          </Link>
        </li>
        <li className="group flex w-fit items-center before:min-w-4">
          <Link
            href="/projects"
            className="flex items-center font-semibold uppercase"
          >
            <Separator className="mr-4 w-6 transition-all group-hover:w-10 group-hover:bg-white" />
            Projects
          </Link>
        </li>
        <li className="group flex w-fit items-center before:min-w-4">
          <Link
            href="/snippets"
            className="flex items-center font-semibold uppercase"
          >
            <Separator className="mr-4 w-6 transition-all group-hover:w-10 group-hover:bg-white" />
            Snippets
          </Link>
        </li>
        <li className="group flex w-fit items-center before:min-w-4">
          <Link href="#" className="flex items-center font-semibold uppercase">
            <Separator className="mr-4 w-6 transition-all group-hover:w-10 group-hover:bg-white" />
            Work
          </Link>
        </li>
      </ol>
    </nav>
  )
}
