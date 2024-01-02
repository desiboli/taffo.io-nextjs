import Image from "next/image"
import Link from "next/link"

import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <header className="bg-background/80 fixed left-0 top-0 z-10 w-full backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="shrink-0">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              alt="logo"
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              priority
            />
          </Link>
        </div>
        <div>
          <nav className="flex gap-4">
            <Link href="/posts">Notes</Link>
            <Link href="/snippets">Snippets</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
