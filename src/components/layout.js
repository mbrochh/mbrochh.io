/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Global, jsx } from '@emotion/core'

import { rhythm } from '../utils/typography.js'
import Centered from './centered.js'
import Header from './header.js'

const linkColor = '#1F5B77'
const headingColor = '#4A4A4A'

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Global
          styles={{
            h1: { color: headingColor },
            h2: { color: headingColor },
            h3: { color: headingColor },
            a: { color: linkColor, textDecoration: 'none' },
            'a:hover': { borderBottom: `1px solid ${linkColor}` },
            '.gatsby-highlight': {
              marginBottom: rhythm(1),
            },
          }}
        />
        <div
          css={{
            marginBottom: rhythm(8),
            paddingLeft: rhythm(1),
            paddingRight: rhythm(1),
            '@media(min-width: 721px)': { paddingLeft: rhythm(2) },
          }}
          {...props}
        >
          <Header />
          {props.center === 1 ? (
            <Centered>{props.children}</Centered>
          ) : (
            props.children
          )}
        </div>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.number,
}

Layout.defaultProps = {
  center: 1,
}

export default Layout
