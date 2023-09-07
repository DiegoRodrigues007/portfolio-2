import ProjetosImg from "../ProjetosImg";
import styles from "./ProjetosDestaques.module.scss";

const ProjetosDestaques = () => {
  const conteudoProjeto = [
    {
      img: "/img/pc.png",
      title: "countdown-timer",
      text: "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica. Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1500, quando um impressor desconhecido pegou uma prova de tipos e a misturou para fazer um livro de espécimes de tipos. Ela sobreviveu não apenas a cinco séculos, mas também ao salto para a composição tipográfica eletrônica, permanecendo essencialmente inalterada. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.",
      site: "#",
      git: "#",
    },
    {
      img: "/img/pc.png",
      title: "Bot Whatsapp",
      text: "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.simplesmente um texto fictício da indústria de impressão e composição éculos, mas também ao salto para a composição tipográfica eletrônica, permanecendo essencialmente inalterada. Foi popularizado na década de 1960 com o lançamento de folhas Letraset",
      site: "#",
      git: "#",
    },
    {
      img: "/img/pc.png",
      title: "Página Nike",
      text: "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.simplesmente um texto fictício da indústria de impressão e composição éculos, mas também ao salto para a composição tipográfica eletrônica, permanecendo essencialmente inalterada. Foi popularizado na década de 1960 com o lançamento de folhas Letraset",
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
            <ProjetosImg title={conteudo.title}  img={conteudo.img} text={conteudo.text}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjetosDestaques;
