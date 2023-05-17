import CardSobre from "../CardSobre";
import styles from "./Sobre.module.scss";
import { MdDesignServices } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { MdCode } from "react-icons/md";
const Sobre = () => {
  const descricoes = [
    { title: "UI & UX Designing ", icon: <MdDesignServices /> },
    { title: "WEB DEVELOPMENT ", icon: <MdComputer /> },
    { title: "BACK END DEVELOPMENT ", icon: <MdCode /> },
  ];

  return (
    <section className={styles.containerSobre}>
      <div className={styles.container}>
        <div className={styles.titleSobre}>
          <h2>
            Sobre <span>.</span>
          </h2>
        </div>
        <div className={styles.textSobre}>
          <p>
            Olá, meu nome é Diego, sou um desenvolvedor Web Full Stack com
            habilidades em front-end e back-end. Especializado em criar
            interfaces de usuário atraentes e responsivas, além de construir a
            lógica por trás dos sites e aplicativos. Valorizo a colaboração, o
            aprendizado contínuo e entregar soluções de alta qualidade.
          </p>
        </div>
        <div className={styles.textInline}>
          <span>3+</span>{" "}
          <p>
            Anos de experiência. Especializada na criação de web sites,
            garantindo uma perfeita experiência para usuários finais.
          </p>
        </div>
        <div className={styles.cardsDoSobre}>
          {descricoes.map((descricao) => (
            <div key={descricao.key}>
              <CardSobre title={descricao.title} icon={descricao.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
