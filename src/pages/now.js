import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NowPage = () => (
  <Layout>
    <SEO title="What I'm doing now" />
    <h1>What I'm doint now</h1>
    <p>
      (This is a <a href="https://nownownow.com/about">now page</a>, and if you
      have your own site,{' '}
      <a href="https://nownownow.com/about">you should make one</a>, too.)
    </p>
    <p>
      Right now, I'm figuring out the bells and whistles of{' '}
      <a href="https://www.gatsbyjs.org/">GatsbyJS</a>. Once I have cracked that
      nut, I have a lot of ideas for content to publish on this domain.
    </p>
    <p>Next up:</p>
    <ul>
      <li>Add GA</li>
      <li>Add typography.js with github theme</li>
      <li>Figure out how to add blog posts via markdown</li>
    </ul>
    <p>
      <i>Updated December 21st, 2018, from Leverkusen, Germany.</i>
    </p>
  </Layout>
)

export default NowPage
