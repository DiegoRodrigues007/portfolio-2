import styles from "./ProjetosImg.module.scss";
import { AiFillStar } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/ai";
const ProjetosImg = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerSection}>
        <div className={styles.sectionDisplay}>
          <img className={styles.imgContainer} src="/img/pc.png" alt="" />

          <div className={styles.content}>
            <div className={styles.star}>
              <AiFillStar className={styles.icon} />
              <h2 className={styles.h2Section}> Página da Nike</h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              illum pariatur dolorem voluptatibus adipisci .
            </p>
            <div className={styles.btns}>
              <a href="#" className={styles.button}>
                {" "}
                Visualizar
              </a>
              <a href="#" className={styles.buttonGit}>
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
