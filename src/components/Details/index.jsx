import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.css"

const DetailsTexts = () => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Feito para Developers</p>
      <h1 className={styles.mainTitle}>Documentação</h1>
      <p className={styles.description}>
        Acesse a documentação do desenvolvedor e torne as tuas aplicações
        prontas para efectuar as transações online.
      </p>
      <button className={styles.button}>
        Ver a documentação <span>s</span>
      </button>

      <div className={styles.detailsColumns}>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Title</h4>
          <p className={styles.columnText}>Paragraph</p>
          <Link to="/page-2" className={styles.columnLink}>
            Link
          </Link>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Title</h4>
          <p className={styles.columnText}>Paragraph</p>
          <Link to="/page-2" className={styles.columnLink}>
            Link
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsTexts
