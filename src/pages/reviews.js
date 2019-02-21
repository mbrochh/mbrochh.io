/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from '@emotion/core'

import { rhythm, scale } from '../utils/typography.js'
import Layout from '../components/layout.js'
import Nav from '../components/nav.js'
import SEO from '../components/seo.js'

export default function ReviewsPage(props) {
  const { edges: posts } = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO
        title="Book reviews by Martin Brochhaus"
        description="These are the books that I would highly recommend to anyone to read."
      />
      <Nav />
      <h1>Reviews</h1>
      <p>
        The amount of knowledge out there is basically unlimited, but our time
        on earth is not. On this page, I will list books that in my opinion
        should be worth your time. The list is roughly sorted by how valuable
        I deemed these books to my life - of course your mileage may vary.
      </p>
      {posts.length > 0 && <h1 css={{ ...scale(1 / 4) }}>Books</h1>}
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
    </Layout>
  )
}

export const pageQuery = graphql`
  query ReviewsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "book" } } }
      sort: { order: DESC, fields: [frontmatter___rating] }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
