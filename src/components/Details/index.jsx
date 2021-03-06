import React from "react"
import { Link } from "gatsby"

import rightArrow from "../../images/chevron-right 2.svg"
import styles from "./styles.module.css"
import Cards from "../Card"
import Button from "../Button"

const DetailsTexts = () => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Feito para Developers</p>
      
      <div className={styles.detailsDescription}>
        <h1 className={styles.mainTitle}>Documentação</h1>
        <p className={styles.description}>
          Acesse a documentação do desenvolvedor e torne as tuas aplicações
          prontas para efectuar as transações online.
        </p>
        <Link to="/docs" className={styles.link}>
          <Button>
            Ver a documentação
            <img src={rightArrow} alt="Right Arrow" />
          </Button>
        </Link>
      </div>
      

      <div className={styles.detailsColumns}>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>SDKs</h4>
          <p className={styles.columnText}>
            Comece rapidamente a integrar a tua aplicação. Use nossos SDKs PHP,
            JS, Java, Python, Ruby,e mais.
          </p>
          <Link to="/page-2" className={styles.columnLink}>
            Use os SDKs
          </Link>
        </div>
      </div>

      <Cards
        title="Fórum"
        description="Junte-se à nossa comunidade, partilha as tuas dúvidas e ajuda a developers como tu a integrarem a suas aplicações as plataformas de pagamento."
        link="page-2"
        linkText="Aceder aos fóruns"
        sideColor="violet"
        isDetails
      />
    </div>
  )
}

export default DetailsTexts
