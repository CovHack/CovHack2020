import React, { useEffect } from 'react'
import Helmet from 'react-helmet'

import { Header, Footer, useSiteMetadata } from '../components'

import AOS from 'aos'
import 'aos/dist/aos.css'

import '../scss/theme.scss'
import '../scss/styles.scss'

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="theme-color" content="#2800ee" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>

      <div className="site">
        <Header />

        <div className="site-content">{children}</div>

        <Footer />
      </div>
    </div>
  )
}
