import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className="container" style={{ paddingTop: '8em' }}>
      <div style={{ margin: '3em 0' }}>
        <h1>
          404
          <span role="img" aria-label="404 face">
            🙄
          </span>
        </h1>
        <p style={{ fontFamily: 'monospace', fontSize: '1.6em' }}>*tumbleweed*</p>
        <p>
          if you think there's supposed to be something here, please heckle on{' '}
          <a href="https://twitter.com/jmsve">twitter</a> or something
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
