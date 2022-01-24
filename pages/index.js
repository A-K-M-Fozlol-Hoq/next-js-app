import Link from "next/link";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log('placing order successfully')
    router.push('/product');
    // router.replace('/product');
  }
  return (
    <div>
      <h1>Hello horld</h1>
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/product"><a>products</a></Link>
      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
  )
}
