import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello horld</h1>
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/product"><a>products</a></Link>
    </div>
  )
}
