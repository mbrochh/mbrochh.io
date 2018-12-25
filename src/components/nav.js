/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from '@emotion/core'

import { rhythm } from '../utils/typography.js'

const Nav = () => {
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
      <Link to="/reviews/">Reviews</Link>
    </nav>
  )
}

export default Nav
