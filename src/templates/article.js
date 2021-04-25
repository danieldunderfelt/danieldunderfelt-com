import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import * as styles from '../style/Article.module.scss'
import * as layoutStyles from '../style/Layout.module.scss'
import TimeDisplay from '../components/TimeDisplay'
import PostMediaImage from '../components/PostMediaImage'
import PostTags from '../components/PostTags'
import get from 'lodash/get'
import SEO from '../components/SEO'
import config from '../../seoConfig'

export const ArticleTemplate = ({
  contentComponent,
  helmet,
  post,
  isPreview,
}) => {
  const PostContent = contentComponent || Content
  const {
    frontmatter: { tags = [], date, title, media_image, ingress = '' },
    html,
  } = post

  return (
    <div className={layoutStyles.Page}>
      <section className={styles.ArticlePage}>
        {helmet || ''}
        <PostTags tags={tags} renderLink={!isPreview} />
        <h1 className={styles.ArticleHeading}>{title}</h1>
        <div className={styles.PostMeta}>
          <TimeDisplay date={date} />
        </div>
        <PostMediaImage mediaImage={media_image} description={title} />
        <PostContent ingress content={ingress} />
        <PostContent content={html} />
      </section>
    </div>
  )
}

ArticleTemplate.propTypes = {
  contentComponent: PropTypes.func,
  post: PropTypes.object,
  helmet: PropTypes.object,
}

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
            <SEO post={article} postSEO={true} />
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
