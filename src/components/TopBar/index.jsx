import styles from "./TopBar.module.css";
import Logo from "../../assets/icon.png";
import { Link, NavLink } from "react-router-dom";

export default function TopBar({ handleOpenCart }) {
  return (
    <div className={styles.TopBar}>
      <div className={styles.topBarButton}>
        <i className="fa-solid fa-circle-user"></i>
      </div>
      <nav className={styles.navigation}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <NavLink
          to={`/HomePage`}
          className={styles.topBarButton}
          style={{ textDecoration: "none" }}
        >
          Home
        </NavLink>
        <NavLink
          to={`/Products`}
          className={styles.topBarButton}
          style={{ textDecoration: "none" }}
        >
          Products
        </NavLink>
      </nav>
      <div onClick={handleOpenCart} className={styles.topBarButton}>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
}
