import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaWordpress,
  FaLaravel,
} from 'react-icons/fa'
import React from 'react'
import * as styles from '../style/Header.module.scss'
import graphQlLogo from "../img/graphql.svg"
import classnames from "classnames"

const SkillList = ({ className }) => {
  return (
    <div className={classnames(className, styles.SkillListContainer)}>
      <p>
        Hi! I'm Daniel Dunderfelt, a full-stack developer. I work as a freelancer with the following technologies (for the most part):
      </p>
      <ul className={styles.SkillList}>
        <li>
          <FaJs color="#f5da55" /> Javascript
        </li>
        <li>
          <FaReact color="#61dafb" /> React
        </li>
        <li>
          <img src={graphQlLogo} alt="GraphQL logo" /> GraphQL
        </li>
        <li>
          <FaNodeJs color="#43853d" /> Node.js
        </li>
        <li>
          <FaPhp color="#4F5B93" /> PHP
        </li>
        <li>
          <FaWordpress color="#0073aa" /> Wordpress
        </li>
        <li>
          <FaLaravel color="#f4645f" /> Laravel
        </li>
      </ul>
    </div>
  )
}

export default SkillList
