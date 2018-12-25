/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from '@emotion/core'

import { rhythm, scale } from '../utils/typography.js'
import Layout from '../components/layout.js'
import Nav from '../components/nav.js'
import SEO from '../components/seo.js'

export default function ReviewsPage(props) {
  let posts = []
  if (props.data.allMarkdownRemark) {
    const { edges: posts } = props.data.allMarkdownRemark
  }
  return (
    <Layout center={0}>
      <SEO
        title="Book reviews by Martin Brochhaus"
        description="These are the books that I would highly recommend to anyone to read."
      />
      <div
        css={{
          '@media(min-width: 721px)': { marginLeft: rhythm(1) },
        }}
      >
        <Nav />
        <h1>Reviews</h1>
        <p>
          I love to read about books and I love to talk about books. This is
          because if I just read a book and don't take notes or don't talk about
          it, I will simply forget everything about it in a matter of weeks.
        </p>
        <p>
          So this page exists to help me to retain all that new knowledge that I
          read every day and to help you decide which books are worth your time.
        </p>
        <p>
          My first review will be about the best book I have ever read,
          "Mindfulness In Plain English". I re-read that book at the beginning
          of each year. Just give me a few days to get through it once more :)
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
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ReviewsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "book" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
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
