/** @jsx jsx */
import React from 'react'
import rehypeReact from 'rehype-react'
import { graphql, Link } from 'gatsby'
import { jsx } from '@emotion/core'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { DiscussionEmbed } from 'disqus-react'

import Nav from '../components/nav.js'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'outbound-link': OutboundLink },
}).Compiler

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, site } = data // data.markdownRemark holds our post data
  const { frontmatter, htmlAst } = markdownRemark
  let siteMeta = site.siteMetadata
  let disqusProps = {
    shortname: siteMeta.disqus.shortName,
    config: {
      identifier: markdownRemark.id,
      title: frontmatter.title,
    },
  }

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Nav />
      <h1 css={{ marginBottom: '0px' }}>{frontmatter.title}</h1>
      <p>
        <small>
          <i>
            {frontmatter.date} &raquo; {markdownRemark.timeToRead} min read
          </i>
        </small>
      </p>
      {renderAst(htmlAst)}
      {frontmatter.type === 'book' &&
        <p>
          <Link to="/reviews/">back to Reviews</Link>
        </p>
      }
      <hr />
      <DiscussionEmbed {...disqusProps} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        disqus {
          shortName
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      htmlAst
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        title
        type
      }
    }
  }
`
