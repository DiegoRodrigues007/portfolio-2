import Copyright from "../Copyright";
import styles from "./Footer.module.scss";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.containerFooter}>
        <div className={styles.icons}>
          <a href="#">
            <AiFillInstagram />
          </a>
          <a href="#">
            <IoLogoWhatsapp />
          </a>
          <a href="#">
            <BsFacebook />
          </a>
        </div>

        <div className={styles.textFooter}>
          <a href="#">
            Info<span>.</span>
          </a>
          <a href="#">
            Suporte<span>.</span>
          </a>
          <a href="#">Marketing</a>
        </div>

        <div className={styles.termos}>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;