import styles from "./CardSobre.module.scss";

const CardSobre = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.containerCard}>
        <div className={styles.card}>
          <div className={styles.iconCard}>
            {props.icon}
          </div>
          <div className={styles.textCard}>
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSobre;
