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
      <li>Reading: Thinking Fast and Slow</li>
      <li>Voluntering: Train the new Python User Group moderators</li>
      <li>Volunteering: Auditing the Python User Group accounts, doing the AGM, then recruiting a new team for PyCon Singapore 2019</li>
      <li>Work: Migrate the codebase of Luxglove.com to the latest and greatest Django & React & ReactNative</li>
      <li>Teaching: Create an awesome 10weeks Python course for General Assembly, starting end of March</li>
    </ul>
    <p>
      <i>Updated February 5, 2019, from Singapore.</i>
    </p>
  </Layout>
)

export default NowPage
