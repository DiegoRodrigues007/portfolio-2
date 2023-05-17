import ProjetosImg from "../ProjetosImg";
import styles from "./ProjetosDestaques.module.scss";

const ProjetosDestaques = ()=>{

    return(

        <section className={styles.container}>
        <h2 className={styles.title}>
          Portfólio <span class="ponto-2">.</span>
        </h2>
        <div>
            <ProjetosImg/>
        </div>
      </section>



    );


}

export default ProjetosDestaques;