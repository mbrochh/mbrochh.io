/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from '@emotion/core'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { rhythm } from '../utils/typography.js'

const Nav = props => {
  return (
    <nav
      css={{
        marginBottom: rhythm(1.5),
        a: {
          marginRight: rhythm(1 / 2),
        },
      }}
    >
      <Link to="/about/">About</Link>
      <Link to="/now/">Now</Link>
      <OutboundLink href="https://twitter.com/mbrochh">Twitter</OutboundLink>
      <OutboundLink href="https://github.com/mbrochh">Github</OutboundLink>
      <OutboundLink href="/rss.xml">RSS</OutboundLink>
    </nav>
  )
}

export default Nav
