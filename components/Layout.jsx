import React from 'react'
import { Header } from './';

function Layout({children}) {
  return (
    <div className="bg-Tulsa1 bg-cover">
        <Header />
        {children}
    </div>
  )
}

export default Layout
