import { Link } from "react-router-dom";

import Container from "./Container";


import img from "../../img/logo.png";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={img} alt="logo" />{" "}
        </Link>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home </Link>
          </li>

          <li className={styles.item}>
            <Link to="/Projects">Projetos</Link>
          </li>

          <li className={styles.item}>
            <Link to="/Company">Empresa</Link>
          </li>

          <li className={styles.item}>
            <Link to="/Contato">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
