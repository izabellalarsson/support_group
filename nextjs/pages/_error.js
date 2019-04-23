import React from 'react'
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <Layout>
          <NotFound />
      </Layout>
    )
  }
}

export default Error