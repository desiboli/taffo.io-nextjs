import Header from "@/components/header"

import "@/styles/mdx.css"

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <section>
        <div className="container py-32">{children}</div>
      </section>
    </>
  )
}
