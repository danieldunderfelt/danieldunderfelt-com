import React from 'react'
import styles from '../style/Article.module.scss'
import danielAvatar from '../img/daniel_avatar.png'

export default function Author({ name }) {
  return (
    <div className={styles.AuthorDisplay}>
      <img alt={name} src={danielAvatar} /> {name}
    </div>
  )
}
