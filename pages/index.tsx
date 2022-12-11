import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {

  const  posts = [
    { title: 'React Testing', excerpt: 'Learn This shit ' },
    { title: 'Tailwind Testing', excerpt: 'Learn Some mo of This shit ' },
  ];

  return (
    <div className="container mx-auto px-10 mb-8 bg-slate-100">
      <Head>
        <title>918 DCX Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
          <div className="lg:col-span col-span-1">
            <div>
              <div className="lg:sticky relative top-8" >

              </div>
            </div>
          </div>
    </div>
  )
}

export default Home
