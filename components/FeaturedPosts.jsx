import React, {useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { getFeatured } from '../services'

function FeaturedPosts() {
    const [featured, setFeatured] = useState([])

    useEffect(() => {
        getFeatured()
        .then((result) => setFeatured(result))
    }, []);
    console.log(featured)
  return (
    <>
        
    </>
  )
}

export default FeaturedPosts
