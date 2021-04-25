import MessageItem from '../components/Message'
import PropTypes from 'prop-types'
import React from 'react'

export const MessageTemplate = ({
  contentComponent,
  helmet,
  post,
  isPreview = false,
}) => {
  return (
    <div>
      {helmet || ''}
      <MessageItem
        contentComponent={contentComponent}
        isLink={false}
        post={post}
        isPreview={isPreview}
      />
    </div>
  )
}

MessageTemplate.propTypes = {
  post: PropTypes.object,
  helmet: PropTypes.object,
}
