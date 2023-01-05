import React, {useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { getFeatured } from '../services'
import { FeaturedPostsCard } from './' 

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function FeaturedPosts() {
    const [featured, setFeatured] = useState([])

    useEffect(() => {
        getFeatured()
        .then((result) => setFeatured(result))
    }, []);
    console.log(featured)
  return (
    <div className="mb-8">
        <Carousel infinite responsive={responsive} itemClass="px-4">
            {featured.map((post, index) => (
                <FeaturedPostsCard key={index} post={post} />
            ))}
        </Carousel>
    </div>
  )
}

export default FeaturedPosts
