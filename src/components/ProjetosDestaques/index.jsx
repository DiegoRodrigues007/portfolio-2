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
      img: "/img/nikee.png",
      title: "Página Nikeeeee",
      text: "olaaaaaaaaaaaa",
      site: "#",
      git: "#",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2 >
          Portfólio <span class="ponto-2">.</span>
        </h2>
      </div>

      <div>
        {conteudoProjeto.map((conteudo) => (
          <div key={conteudo.key}>
            <ProjetosImg img={conteudo.img} text={conteudo.text} title={conteudo.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjetosDestaques;
