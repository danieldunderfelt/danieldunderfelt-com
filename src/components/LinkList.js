import React from 'react'
import styles from '../style/Header.module.scss'
import { Link } from 'gatsby'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiMail, FiChevronRight } from 'react-icons/fi'

const LinkList = ({ className }) => {
  return (
    <div className={className}>
      <h5 className={styles.LinkListHeading}>Find Daniel on</h5>
      <ul className={styles.LinkList}>
        <li>
          <a
            href="https://twitter.com/ddunderfelt"
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitter /> @ddunderfelt
          </a>
        </li>
        <li>
          <a
            href="https://github.com/danieldunderfelt"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub /> danieldunderfelt
          </a>
        </li>
        <li>
          <a
            href="mailto:daniel@developsuperpowers.com"
            target="_blank"
            rel="noopener noreferrer">
            <FiMail /> daniel@developsuperpowers.com
          </a>
        </li>
      </ul>
      <ul className={styles.PageList}>
        <li>
          <Link to="/about">
            <FiChevronRight size="18px" /> About
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy">
            <FiChevronRight size="18px" /> Privacy policy
          </Link>
        </li>
        <li>
          <a href="https://verycool.tech" target="_blank" rel="noopener noreferrer">
            <FiChevronRight size="18px" /> verycool.tech
          </a>
        </li>
      </ul>
    </div>
  )
}

export default LinkList
