import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import get from 'lodash/get'
import Seo from '../components/Seo'
import Helmet from 'react-helmet'
import config from '../../seoConfig'
import { MessageTemplate } from './messageTemplate'

const Message = ({ data }) => {
  const { markdownRemark: post } = data
  const {
    fields,
    longExcerpt,
    titleExcerpt: title,
    frontmatter: { tags, media_image, normalDate },
  } = post

  const article = {
    title: title,
    slug: get(fields, 'slug', ''),
    imgUrl: get(media_image, 'childImageSharp.fluid.src', ''),
    date: normalDate,
    tags: tags,
    description: longExcerpt,
  }

  return (
    <Layout>
      <MessageTemplate
        post={post}
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

Message.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Message

export const pageQuery = graphql`query MessageByID($id: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    excerpt(pruneLength: 256)
    titleExcerpt: excerpt(pruneLength: 30)
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
