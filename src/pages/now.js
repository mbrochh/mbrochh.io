import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout.js'
import Nav from '../components/nav.js'
import SEO from '../components/seo.js'

const NowPage = () => (
  <Layout>
    <SEO title="What I'm doing now" />
    <Nav />
    <h1>What I'm doing now</h1>
    <p>
      (This is a{' '}
      <OutboundLink href="https://nownownow.com/about">now page</OutboundLink>,
      and if you have your own site,{' '}
      <OutboundLink href="https://nownownow.com/about">
        you could make one
      </OutboundLink>
      , too.)
    </p>
    <p>
      Right now, I'm figuring out the bells and whistles of{' '}
      <OutboundLink href="https://www.gatsbyjs.org/">GatsbyJS</OutboundLink>.
      Once I have cracked that nut, I have a lot of ideas for content to publish
      on this domain.
    </p>
    <p>Next up:</p>
    <ul>
      <li>Setup Amazon payment links and books page</li>
    </ul>
    <p>
      <i>Updated December 22st, 2018, from Leverkusen, Germany.</i>
    </p>
  </Layout>
)

export default NowPage
