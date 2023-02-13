import React, { useEffect, useState } from 'react';
import { Layout } from '../components'
import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  )
}

export default MyApp
