import React, { Component } from 'react'
import { Link } from 'gatsby'
import {
  HighlightedMessage,
  Post as PostStyle,
  PostLink,
  ArticleHeading,
  PostMeta,
} from '../style/Article.module.scss'
import TimeDisplay from './TimeDisplay'
import PostMediaImage from './PostMediaImage'
import { HTMLContent } from './Content'
import PostTags from './PostTags'
import classnames from 'classnames'

class Post extends Component {
  render() {
    const { post, highlight = false } = this.props
    const { frontmatter, fields, excerpt } = post
    const { tags = [], title, date, media_image, ingress } = frontmatter

    const articleIngress = ingress || excerpt

    return (
      <div
        className={classnames(PostStyle, highlight ? HighlightedMessage : '')}>
        <PostTags tags={tags} />
        <Link className={PostLink} to={fields.slug}>
          <h2 className={ArticleHeading}>{title}</h2>
          <div className={PostMeta}>
            <TimeDisplay date={date} />
          </div>
          <HTMLContent content={articleIngress} />
          <PostMediaImage mediaImage={media_image} />
        </Link>
      </div>
    )
  }
}

export default Post
