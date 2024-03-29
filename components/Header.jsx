import Link from 'next/link';
import React, {useState, useEffect }from 'react';
import { getCategories } from '../services'

function Header() {
  const [categories, setCategories] = useState([]);
  const [displayCategories, setDisplay] = useState(true)
  
   useEffect(() => {
     getCategories()
       .then((newCategories) => setCategories(newCategories))
     
   }, []);

   const handleCategories = () => {
    setDisplay(!displayCategories)
   }


  return (
    <div className="container mx-auto px-10 mb-8 bg-tulsa bg-no-repeat bg-cover">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link rel="stylesheet" href="/" >
            <span className="cursor-pointer font-bold text-4xl text-white">
              918-DCX
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <div className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer" onClick={handleCategories}>
            {displayCategories ? "Categories" :  (
              <div>
                {categories.map((category) => (
                  <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
           </div>
        </div>
      </div>
    </div>
  )
}

export default Header
