import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <h1>
        404{' '}
        <span role="img" aria-label="404 face">
          😬
        </span>
      </h1>
      <p>*tumbleweed*</p>
      <p>
        if you think there's supposed to be something here, please heckle at me on{' '}
        <a href="https://twitter.com/jmsve">twitter</a> or something
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
