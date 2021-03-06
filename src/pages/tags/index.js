import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import {
  ListHeading,
  TagList,
  TagListTag,
  TagListCount,
} from '../../style/PostList.module.scss'
import config from '../../../seoConfig'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <Helmet title={`Tags | ${config.siteTitle}`} />
    <div>
      <h3 className={ListHeading}>Tags</h3>
      <ul className={TagList}>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <strong className={TagListTag}>{tag.fieldValue}</strong>
              <span className={TagListCount}>{tag.totalCount}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
