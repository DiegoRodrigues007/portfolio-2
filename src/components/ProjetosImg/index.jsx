import styles from "./ProjetosImg.module.scss";
import { AiFillStar } from "react-icons/ai";

const ProjetosImg = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.containerSection}>
        <div className={styles.sectionDisplay}>
          <img className={styles.imgContainer} src={props.img} alt="" />

          <div className={styles.content}>
            <div className={styles.star}>
              <AiFillStar className={styles.icon} />
              <h2 className={styles.h2Section}> {props.title}</h2>
            </div>

            <p>
              {props.text}
            </p>
            <div className={styles.btns}>
              <a href={props.site} className={styles.button}>
                {" "}
                Visualizar
              </a>
              <a href={props.git} className={styles.buttonGit}>
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default ProjetosImg;
