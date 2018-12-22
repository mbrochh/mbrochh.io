import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About Martin Brochhaus" />
    <h1>Welcome to My Personal Blog</h1>
    <p>
      My name is Martin. I have been building web applications since 1998, but
      of course we didn't call it "web application" back then. I was born in
      Germany but I left the country in 2011 to marry my wife in Singapore.
    </p>
    <h2>Work</h2>
    <p>
      I'm the founder and CEO of{' '}
      <OutboundLink href="https://bitlabstudio.com">Bitlab Studio</OutboundLink>
      . We are a small but well established web agency based in Singapore and
      Germany. Our core competence is building web applications and mobile
      applications based on{' '}
      <OutboundLink href="https://www.djangoproject.com/">Django</OutboundLink>,{' '}
      <OutboundLink href="https://graphql.org/">GraphQL</OutboundLink>,{' '}
      <OutboundLink href="https://reactjs.org/">React</OutboundLink> and{' '}
      <OutboundLink href="https://facebook.github.io/react-native/">
        ReactNative
      </OutboundLink>
      .
    </p>
    <h2>The Artling & Publishizer</h2>
    <p>
      At Bitlab Studio, we love to work with young startups and so it happened
      that I am also working as the CTO of{' '}
      <OutboundLink href="https://theartling.com">The Artling</OutboundLink>{' '}
      since 2015. In that time, we also released{' '}
      <OutboundLink href="https://luxglove.com">Luxglove</OutboundLink> under
      the umbrella of The Artling and managed to raise{' '}
      <OutboundLink href="https://www.techinasia.com/the-artling-series-a-artshare-acquisition">
        $1.8m in series A funding
      </OutboundLink>
      .
    </p>
    <p>
      Before I joined The Artling, I co-founded{' '}
      <OutboundLink href="https://publishizer.com">Publishizer</OutboundLink>.
      While the site has been profitable for years, it has been a long and
      difficult journey to find a good product-market-fit. Thankfully, our
      perseverance has paid off. At the end of 2018 we finally hit a sweet spot
      and are now finalising negotiations with amazing investors.
    </p>
    <h2>PyCon Singapore & Python User Group Singapore</h2>
    <p>
      Since 2013 I have been heavily involved with organizing the{' '}
      <OutboundLink href="https://pycon.sg">
        annual Python conference in Singapore
      </OutboundLink>
      . I also organize the monthly{' '}
      <OutboundLink href="https://www.meetup.com/Singapore-Python-User-Group/">
        Python User Group Singapore meetup
      </OutboundLink>
      .
    </p>
    <h2>Teaching</h2>
    <p>
      Since 2017 I have been giving introductory Python classes at{' '}
      <OutboundLink href="https://generalassemb.ly/instructors/martin-brochhaus/7500">
        General Assembly
      </OutboundLink>{' '}
      and through my engagement there I was invited to speak at various
      conferences and panel discussions in Singapore.
    </p>
    <h2>Bitcoin</h2>
    <p>
      We are currently witnessing the transformation of our society from the
      industrial age into the information age. Crypto currencies play a major
      role in this process and will change virtually every aspect of life within
      the next 10 years or so, just like the internet did in the past 10 years.
      I have spent thousands of hours reading everything about Bitcoin there is
      to read and if time allows, I will become a bit more active in the space
      in 2019.
    </p>
  </Layout>
)

export default AboutPage
