import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li className={styles.social_list_li}>
          <FaFacebook />
        </li>
        <li className={styles.social_list_li}>
          <FaLinkedin />
        </li>
        <li className={styles.social_list_li}>
          <FaInstagram />
        </li>
      </ul>
      <p className={styles.copy_right_span}>
        <span>Costs</span>2023
      </p>
    </footer>
  );
}

export default Footer;
