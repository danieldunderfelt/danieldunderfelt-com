import React from 'react'
import { AuthorDisplay } from '../style/Article.module.scss'
import danielAvatar from '../img/daniel_avatar.png'

export default function Author({ name }) {
  return (
    <div className={AuthorDisplay}>
      <img alt={name} src={danielAvatar} /> {name}
    </div>
  )
}
