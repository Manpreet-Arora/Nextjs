import Link from "next/link";
import {useRouter} from 'next/router';

function Home() {
  const routes = useRouter();
  const handleClick = () =>{
    routes.replace("/product")
    console.log("placing your order")
  }

  return (
    <>
      <h1>Home</h1>
      <Link href="/blog">
       Blog
      </Link>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
export default Home;
