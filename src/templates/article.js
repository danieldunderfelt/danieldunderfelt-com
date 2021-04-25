import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import get from 'lodash/get'
import Seo from '../components/Seo'
import config from '../../seoConfig'
import { ArticleTemplate } from './articleTemplate'

const Article = ({ data }) => {
  const { markdownRemark: post } = data
  const {
    fields,
    longExcerpt,
    frontmatter: { title, tags, media_image, normalDate, ingress = '' },
  } = post

  const article = {
    title: title,
    slug: get(fields, 'slug', ''),
    imgUrl: get(media_image, 'childImageSharp.fluid.src', ''),
    date: normalDate,
    tags: tags,
    description: ingress || longExcerpt,
  }

  return (
    <Layout>
      <ArticleTemplate
        post={post}
        contentComponent={HTMLContent}
        helmet={
          <>
            <Helmet>
              <title>{`${title} | ${config.siteTitle}`}</title>
            </Helmet>
            <Seo post={article} postSEO={true} />
          </>
        }
      />
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Article

export const pageQuery = graphql`query ArticleByID($id: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    excerpt(pruneLength: 256)
    longExcerpt: excerpt(pruneLength: 400)
    html
    fields {
      slug
    }
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      normalDate: date(formatString: "YYYY-MM-DDTHH:mm:ssZZ")
      title
      tags
      ingress
      media_image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FIXED)
          fluid {
            src
            aspectRatio
            srcSet
            sizes
          }
        }
      }
    }
  }
}
`
