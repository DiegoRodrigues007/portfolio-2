import ProjetosImg from "../ProjetosImg";
import styles from "./ProjetosDestaques.module.scss";

const ProjetosDestaques = () => {
  const conteudoProjeto = [
    {
      img: "/img/pc.png",
      title: "Página Nike",
      text: "ola",
      site: "#",
      git: "#",
    },
    {
      img: "/img/pc.png",
      title: "Página Nike",
      text: "ola mundo",
      site: "#",
      git: "#",
    },
    {
      img: "/img/pc.png",
      title: "Página Nike",
      text: "olaaaaaaaaaaaa",
      site: "#",
      git: "#",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Portfólio <span class="ponto-2">.</span>
      </h2>
      <div>
        {conteudoProjeto.map((conteudo) => (
          <div key={conteudo.key}>
            <ProjetosImg img={conteudo.img} text={conteudo.text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjetosDestaques;
