import BannerPrincipal from "@/components/BannerPrincipal";

import Menu from "@/components/Menu/Menu";
import ProjetosDestaques from "@/components/ProjetosDestaques";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <Menu />
      <BannerPrincipal />
      <Sobre />
      <ProjetosDestaques/>
    </>
  );
}
