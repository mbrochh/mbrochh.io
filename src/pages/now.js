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
      Here are the projects that occupy my mind at the moment:
    </p>
    <ul>
      <li>Reading: Thinking In Bets</li>
      <li>Volunteering: Finding a venue for PyCon 2019</li>
      <li>Work: Learn as much as I can about Machine Learning, especially image classification</li>
      <li>Teaching: Update my slides for the Python 10 weeks course. The first batch was a success, I want the second batch to be even better.</li>
    </ul>
    <p>
      <i>Updated May 26, 2019, from Hong Kong.</i>
    </p>
  </Layout>
)

export default NowPage
