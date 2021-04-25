import Content from '../components/Content'
import * as layoutStyles from '../style/Layout.module.scss'
import Helmet from 'react-helmet'
import config from '../../seoConfig'
import * as articleStyles from '../style/Article.module.scss'
import PropTypes from 'prop-types'
import React from 'react'

export const PageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  
  return (
    <div className={ layoutStyles.Page }>
      <Helmet title={ `${ title } | ${ config.siteTitle }` } />
      <section className={ articleStyles.ArticlePage }>
        <h1 className={ articleStyles.ArticleHeading }>{ title }</h1>
        <PageContent content={ content } />
      </section>
    </div>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}
