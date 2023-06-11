import styles from "./BannerPrincipal.module.scss";

const BannerPrincipal = () => {
  return (
    <section className={styles.containerBanner}>
      <div className={styles.textBanner}>
        <h1>
          Desenvolvimento web Full Stack <span>.</span>
        </h1>
        <p>
          Criação de web sites responsivos utilizando metodologias ágeis e boas
          praticas de programação.
        </p>
        <a href="#">Saiba mais</a>
      </div>
    </section>
  );
};

export default BannerPrincipal;
