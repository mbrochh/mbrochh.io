/** @jsx jsx */
import { jsx } from '@emotion/core'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { rhythm } from '../utils/typography.js'

const Footer = () => {
  return (
    <footer
      css={{
        marginBottom: rhythm(1.5),
        a: {
          marginRight: rhythm(1 / 2),
        },
      }}
    >
      <OutboundLink href="https://twitter.com/mbrochh">Twitter</OutboundLink>
      <OutboundLink href="https://github.com/mbrochh">Github</OutboundLink>
      <OutboundLink href="/rss.xml">RSS</OutboundLink>
    </footer>
  )
}

export default Footer
