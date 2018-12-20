import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Welcome"
      description="Personal blog of Martin Brochhaus (@mbrochh)"
    />
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/now/">What I'm doing now</Link>
  </Layout>
)

export default IndexPage
