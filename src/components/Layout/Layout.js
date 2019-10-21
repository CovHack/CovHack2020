import React from 'react'
import Helmet from 'react-helmet'

import { Header, Footer, useSiteMetadata } from '..'

import '../../scss/theme.scss'
import '../../scss/styles.scss'
import './Layout.scss'

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

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

        <script src="https://js.tito.io/v1" async></script>

        <link
          rel="stylesheet"
          href="https://indestructibletype.com/fonts/Jost.css"
          type="text/css"
          charset="utf-8"
        />
      </Helmet>

      <div className="site">
        <Header />

        <div className="site-content">{children}</div>

        <Footer />
      </div>
    </div>
  )
}
