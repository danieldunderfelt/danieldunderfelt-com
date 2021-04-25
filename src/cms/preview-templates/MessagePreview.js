import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import Content from '../../components/Content'
import { MessageTemplate } from '../../templates/messageTemplate'

const MessagePreview = ({ entry, widgetFor }) => {
  const post = {
    frontmatter: {
      tags: entry.getIn(['data', 'tags']),
      date: format(entry.getIn(['data', 'date']), 'MMMM DD, YYYY'),
      media_image: entry.getIn(['data', 'media_image']),
    },
    fields: {
      slug: '',
    },
    html: widgetFor('body'),
  }

  return (
    <MessageTemplate
      contentComponent={Content}
      isLink={false}
      post={post}
      isPreview={true}
    />
  )
}

MessagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MessagePreview
