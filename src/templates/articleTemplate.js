import Content from '../components/Content'
import * as layoutStyles from '../style/Layout.module.scss'
import * as styles from '../style/Article.module.scss'
import PostTags from '../components/PostTags'
import TimeDisplay from '../components/TimeDisplay'
import PostMediaImage from '../components/PostMediaImage'
import PropTypes from 'prop-types'
import React from 'react'

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
    <div className={ layoutStyles.Page }>
      <section className={ styles.ArticlePage }>
        { helmet || '' }
        <PostTags tags={ tags } renderLink={ !isPreview } />
        <h1 className={ styles.ArticleHeading }>{ title }</h1>
        <div className={ styles.PostMeta }>
          <TimeDisplay date={ date } />
        </div>
        <PostMediaImage mediaImage={ media_image } description={ title } />
        <PostContent ingress content={ ingress } />
        <PostContent content={ html } />
      </section>
    </div>
  )
}

ArticleTemplate.propTypes = {
  contentComponent: PropTypes.func,
  post: PropTypes.object,
  helmet: PropTypes.object,
}
