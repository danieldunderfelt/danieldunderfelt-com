import React from 'react'
import { PageList } from '../style/Layout.module.scss'
import { Link } from 'gatsby'
import { FiChevronRight } from 'react-icons/fi'
import classnames from 'classnames'

const FooterLinks = ({ className }) => (
  <div className={classnames(className)}>
    <ul className={PageList}>
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
        <a
          href="https://verycool.tech"
          target="_blank"
          rel="noopener noreferrer">
          <FiChevronRight size="18px" /> verycool.tech
        </a>
      </li>
    </ul>
  </div>
)

export default FooterLinks
