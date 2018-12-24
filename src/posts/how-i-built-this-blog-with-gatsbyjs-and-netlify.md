---
path: '/gatsbyjs-netlify/'
date: '2018-12-24'
title: 'How I Built This Blog with GatsbyJS and Netlify'
type: 'blog' # <!-- omit in toc -->
---

<outbound-link href="https://www.gatsbyjs.org/">GatsbyJS</outbound-link> and <outbound-link href="https://netlify.com">netlify</outbound-link> are
getting quite a lot of buzz recently. If you love to work with React, and if you would like to maintain your personal website as a static website, then this stack probably is for you.

At my company <outbound-link href="https://bitlabstudio.com">Bitlab Studio</outbound-link> we constantly push ourselves to find the best way to build and host secure, fast and reliable web applications for our clients. When I saw how GatsbyJS and netlify took off, almost taking the web-design community by storm, I wanted to see what the hype is all about.

I decided to _just give it five minutes_ and see how far I can get. Approximately 8:35hrs later I had this blog online. I found it to be a really fun exercise, so by putting out this guide, I hope to encourage you to try the same. I would estimate that by just following this guide, you should have your blog online in one or two hours.

We will go through the following steps:

- [Create your GatsbyJS repository](#create-your-gatsbyjs-repository)
- [Add Google Analytics](#add-google-analytics)
- [Add Typography.js](#add-typographyjs)
- [Add emotion](#add-emotion)
- [Add markdown based blog](#add-markdown-based-blog)
- [Add some global styles](#add-some-global-styles)
- [Host on netlify](#host-on-netlify)

When I walked down this rabbit hole, I started with this <outbound-link href="https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/">official step by step guide by netlify</outbound-link>.

<a name="create-your-gatsbyjs-repository"></a>

## Create your GatsbyJS repository

First we should create a new repository on Github. After that, we will initialize the repository on our own machine. I like to save all my projects in a folder called `~/Projects`, obviously this might be different on your machine.

```bash
cd ~/Projects
mkdir testblog
cd testblog
npm install -g gatsby-cli
gatsby new testblog
cd testblog
npm install gatsby-cli --save
git init
git add .
git commit -am "Initial commit"
git remote add origin git@github.com:USERNAME/testblog.git
git push -u origin master
gatsby develop
```

At this point, we should be able to see our new Gatsby site in our browser

<a name="add-google-analytics"></a>

## Add Google Analytics

Almost everything in Gatsby can be achieved by installing a gatsby-plugin. So let's install a plugin that loads Google Analytics. This plugin also comes with a nice `<OutboundLink>` component that sends a custom "Outbound Link" event to Google Analytics when people click those links.

Official docs: <outbound-link href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/">gatsby-plugin-google-analytics</outbound-link>

```bash
cd ~/Projects/testblog/testblog
npm install --save gatsby-plugin-google-analytics
```

After installing the plugin, we need to add it's settings to `gatsby-config.js`:

```javascript
// gatsby-config.js
module.exports = {
  // more settings here...
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-XXXXXXXX-X',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    // more plugins here...
  ],
}
```

<a name="add-typographyjs"></a>

## Add Typography.js

I actually never used this before, but it seems that the Gatsby community likes to use this library and I must say, it is indeed pretty cool.

Official docs: <outbound-link href="https://www.gatsbyjs.org/packages/gatsby-plugin-typography/">gatsby-plugin-typography</outbound-link>

```bash
cd ~/Projects/testblog/testblog
npm install --save gatsby-plugin-typography react-typography typography
```

Once again, after installing the plugin, we need to add it's settings:

```javascript
// gatsby-settings.js
module.exports = {
  // more settings here...
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
    },
    // more plugins here...
  ],
}
```

We also need to create the file `src/utils/typography.js`. Here we can chose our base-font-size and base-line-height and also define a bunch of Google fonts that we would like to import in our site:

```jsx
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.8,
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Lora', 'serif'],
  googleFonts: [
    {
      name: 'Lato',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Lora',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
```

You can <outbound-link href="http://kyleamathews.github.io/typography.js/what/">learn more about Typography.js here.</outbound-link>

<a name="add-emotion"></a>

## Add emotion

I'm a big fan of "CSS in JS" and it seems that emotion is currently the best library for this, so let's add it to our project:

Official docs: <outbound-link href="https://www.gatsbyjs.org/packages/gatsby-plugin-emotion/">gatsby-plugin-emotion</outbound-link>

```bash
cd ~/Projects/testblog/testblog
npm install --save gatsby-plugin-emotion @emotion/core @emotion/styled
```

As usual, we need to add some settings:

```javascript
// gatsby-settings.js
module.exports = {
  // more settings here...
  plugins: [
    `gatsby-plugin-emotion`,
    // more plugins here...
  ],
}
```

I suspect there is a better way to do this but I could not figure it out. What worked for me was to use that `/** @jsx jsx */` hint at the top of the file. Whenever we want to use emotion in our components it will look something like this:

```jsx
// just an example, you don't have to paste this anywhere right now
/** @jsx jsx */
import { jsx } from '@emotion/core'

export default function SomeComponent(props) {
  return (
    <div css={{color: 'red}}>Hi</div>
  )
}
```

You can <outbound-link href="https://github.com/emotion-js/emotion">learn more about emotion here</outbound-link>.

<a name="add-markdown-based-blog"></a>

## Add markdown based blog

Now we get to the meaty parts. In order to have a blog where the content comes from Markdown files, we need to install a bunch of plugins.

- <outbound-link href="https://www.gatsbyjs.org/packages/gatsby-source-filesystem">gatsby-source-filesystem</outbound-link> will read files from a given folder and make sure that they can be queried by a GraphQL query in our components.
- <outbound-link href="https://www.gatsbyjs.org/packages/gatsby-transformer-remark/">gatsby-transformer-remark</outbound-link> takes a Markdown file and turns it into HTML.
- <outbound-link href="https://www.gatsbyjs.org/packages/gatsby-remark-images/">gatsby-remark-images</outbound-link> processes images in our Markdown content and makes them responsive by saving different sizes for our production build.
- <outbound-link href="https://www.gatsbyjs.org/packages/gatsby-remark-responsive-iframe/">gatsby-remark-responsive-iframe</outbound-link> wraps iframes in your Markdown content in a responsive container with a fixed aspect ratio.
- <outbound-link href="https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/">gatsby-remark-prismjs</outbound-link> adds syntax highlighting to code blocks in our Markdown content.
- <outbound-link href="https://www.gatsbyjs.org/packages/gatsby-remark-component/">gatsby-remark-component</outbound-link> allows us to use React components in Markdown. This is especially useful so that we can use the `<OutboundLink>` component that comes with the Google Analytics plugin.

```bash
npm install --save gatsby-source-filesystem
npm install --save gatsby-transformer-remark
npm install --save gatsby-remark-images gatsby-plugin-sharp
npm install --save gatsby-remark-responsive-iframe
npm install --save gatsby-transformer-remark gatsby-remark-prismjs prismjs
npm install --save gatsby-transformer-remark gatsby-remark-component
npm install --save rehype-react
```

Now we need to add two settings objects, one for gastby-source-filesystem and one for gatsby-transformer-remark. The latter has a "plugins" key itself which means that we are adding most of the plugins as sub-pluggins to the gatsby-transformer-remark plugin (that's a lot of plugins in one sentence o_O):

```javascript
// gatsby-settings.js
module.exports = {
  // more settings here...
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem`,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    // more plugins here...
  ],
}
```

We need to do more! Add this one line to `gatsby-browser.js`. This loads the theme for the syntax highlighting. You can find out about <outbound-link href="https://github.com/PrismJS/prism/tree/master/themes">available Prism themes here</outbound-link>.

```javascript
// gatsby-browser.js
require('prismjs/themes/prism-okaidia.css')
```

Next we have to perform a bit of black magic. As far as I understand it, we can define a `createPages` function in `gatsby-node.js`. When Gatbsy tries to render all static pages, it will call this function. The function will query a GraphQL endpoint which was magically provided by the gatsby-transformer-remark plugin and call the `createPage` action for each item in the queryset.

If we ever want to change which files will be rendered (i.e. exclude posts that you have marked as drafts), we would have to change the query here.

Finally, it is in this file where we define which template should be used to render a blog post (`src/templates/blogPost.js`).

```javascript
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
```

Since we just referenced the file `src/templates/blogPost.js`, let's create that file:

```jsx
/** @jsx jsx */
import React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import { jsx } from '@emotion/core'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout.js'
import SEO from '../components/seo.js'

// this is some black magic to make sure that the OutboundLink component can
// be used in Markdown content as <outbound-link href="..."></outbound-link>
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'outbound-link': OutboundLink },
}).Compiler

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, htmlAst } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <h1 css={{ marginBottom: '0px' }}>{frontmatter.title}</h1>
      <p>
        <small>
          <i>
            {frontmatter.date} &raquo; {markdownRemark.timeToRead} min read
          </i>
        </small>
      </p>
      {renderAst(htmlAst)}
    </Layout>
  )
}

// the fields in this GraphQL query will be available in the React component
// above
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
```

Now it's time to add a Markdown file and make sure that we are able to see it in the browser. Create a file `src/posts/hello-world.md`. The things at the top of the file are called "frontmatter". You can come up with any keys and values here and you will be able to query these fields in your GraphQL queries. I like to add a key `type` to all my posts so that I can later have one page with "blog" post and one page with "book" reviews and one page with "boardgame" reviews and so on. All pages will be found in the `src/posts/` folder.

```markdown
---
type: 'blog'
path: '/hello-world/'
date: '2018-12-24'
title: 'Hello World'
description: 'Just a test post.'
---

Hello world! Merry Christmas, everyone!
```

The last piece in the puzzle is to update our `index.js` file and make sure that it displays a list of all published blog posts:

```jsx
// replace index.js content this this:
/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from '@emotion/core'

import { rhythm, scale } from '../utils/typography.js'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'

export default function IndexPage(props) {
  const { edges: posts } = props.data.allMarkdownRemark
  return (
    <Layout center={0}>
      <SEO title="My blog" description="My cool blog" />
      <div
        css={{
          '@media(min-width: 721px)': { marginLeft: rhythm(1) },
        }}
      >
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
            path
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
```

Let's run `gatsby develop` and have a look at our new blog!

<a name="add-some-global-styles"></a>

## Add some global styles

At this stage, we will want to apply some finishing touches to our site. We might want to change the colors of headings, body-text and links. This can be achieved with the `<Global>` component that comes with emotion. Let's add this to `layout.js` because that file is imported in all our other files, so this is a great place to put things that we want to be rendered on every page:

```jsx
/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Global, jsx } from '@emotion/core'

import { rhythm } from '../utils/typography.js'
import Header from './header'

const linkColor = '#1F5B77'
const headingColor = '#4A4A4A'

const Layout = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
```

<a name="host-on-netlify"></a>

## Host on netlify

Lastly, we will want to put our new blog online. I can highly recommend <outbound-link href="https://netlify.com">netlify</outbound-link> for this. It is so simple, I will not even describe how it works, just sign up for an account and click at the most obvious links and you will have your site online in a matter of minutes. If you need some guidance, check out the <outbound-link href="https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/">official step by step guide by netlify</outbound-link> which I mentioned at the beginning of this article.

Lastly, I made sure that my domain is hooked up with netlify. This is of course different for each DNS provider, so you will have to figure that out yourself. In my case, I was using <outbound-link href="https://namecheap.com">Namecheap</outbound-link> and I simply changed the DNS servers for my domain to the netlify DNS servers and waited for a few hours.

Once that change has propagated, you will also be able to activate HTTPs via the netlify web interface.

---

Thank you for reading this post. I hope it proved to be useful for you. If you would like to buy me a Chai tea, you can send a few satoshis to my BTC address: 3Q6dfwHh594vkNs2HqXk9YsqBSFK4VzuJ5

If this post motivated you to build your own blog, please feel free to post a link to your blog in the comments!
