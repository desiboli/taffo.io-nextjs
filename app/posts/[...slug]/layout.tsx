import "../../mdx.css"

export default function PostLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="container">
        {children}
      </div>
    </section>
  )
}