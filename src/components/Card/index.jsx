import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.css"
import Button from "../Button"

const Cards = ({ title, description, link, linkText, isDetails, sideColor="green" }) => {
  return (
    <div className={isDetails ? styles.detailsContainer : styles.container}>
      <div className={`${styles.sideDiv} ${styles[sideColor]}`} />
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <Link to={`/${link}/`}>
          {isDetails ? <Button>{linkText}</Button> : linkText}
        </Link>
      </div>
    </div>
  )
}

export default Cards
