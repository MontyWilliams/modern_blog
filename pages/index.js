import { getPosts } from '../services';
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget, FeaturedPosts, Footer } from '../components/index.js'

const Home = ({posts}) => {

 

  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>918 DCX Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => (<PostCard  post={post.node} key={post.title} />))}
          </div>
            <div className="lg:col-span-4 col-span-1">
              <div className="lg:sticky relatve top-8" >
                <PostWidget />
                <Categories />
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }
}

export default Home
