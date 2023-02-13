import React from 'react'
import { Header } from './';
import { Footer } from './';


function Layout({children}) {
  return (
    <div>
      <div>
        <Header />
        {children}
      </div>
      <div className=" bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
