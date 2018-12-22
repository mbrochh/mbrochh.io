/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from '@emotion/core'

import { rhythm, scale } from '../utils/typography.js'

const Header = props => {
  return (
    <header
      css={{
        margin: `${rhythm(1.5)} 0`,
      }}
      {...props}
    >
      <Link
        css={{
          fontFamily: '"Source Sans Pro", sans-serif',
          fontWeight: '600',
          textDecoration: 'none',
          ...scale(1 / 2),
        }}
        to="/"
        alt="Link to Home view"
      >
        Martin Brochhaus
      </Link>
    </header>
  )
}

export default Header
