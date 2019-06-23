import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useSiteMetadata from './SiteMetadata'

import AOS from 'aos'
import 'aos/dist/aos.css'

import '../scss/theme.scss'
import '../scss/styles.scss'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })    
  })

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        /> */}
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

export default TemplateWrapper
