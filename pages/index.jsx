import Head from "next/head"
import Hero from "../components/Hero"
import Blogs from "../components/blogs/Blogs"
import News from "../components/news/News"
import UpcomingNews from "../components/news/UpcomingNews"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Singapore Swimming Club</title>
        <meta name="description" content="Singapore Swimming Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Blogs />
      <News />
      <UpcomingNews />
    </div>
  )
}

export default Home
