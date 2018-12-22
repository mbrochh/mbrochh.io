/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from '@emotion/core'

import { rhythm, scale } from '../utils/typography'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import SEO from '../components/Seo'

export default function IndexPage(props) {
  const { edges: posts } = props.data.allMarkdownRemark
  return (
    <Layout centered={false}>
      <SEO
        title="Personal blog by Martin Brochhaus"
        description="Personal blog by Martin Brochhaus (@mbrochh). I write about Python and React."
      />
      <div css={{ marginLeft: rhythm(1) }}>
        <Nav />
        <h1 css={{ ...scale(1 / 4) }}>Articles</h1>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div css={{ marginBottom: rhythm(1 / 4) }} key={post.id}>
                -{' '}
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            excerpt
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
