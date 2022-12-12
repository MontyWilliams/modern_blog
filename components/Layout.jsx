import React from 'react'
import { Header } from './';

<Layout>
    yooooooo
</Layout>


function Layout({children}) {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout
