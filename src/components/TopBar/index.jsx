import styles from "./TopBar.module.css";
import Logo from "../../assets/icon.png";
import { NavLink } from "react-router-dom";

export default function TopBar({ handleOpenCart }) {
  const activeClass = (isActive) =>
    styles.topBarButtonActive + (!isActive ? styles.topBarButton : "");

  return (
    <div className={styles.TopBar}>
      <nav className={styles.navigation}>
        <NavLink
          to={`/`}
          className={({ isActive, isPending }) =>
            isPending
              ? styles.topBarButton
              : isActive
              ? styles.topBarButtonActive
              : styles.topBarButton
          }
        >
          <i className="fa-solid fa-house-chimney"></i>
          <p className={styles.navTitle}>Home</p>
        </NavLink>
        <NavLink
          to={`/Products`}
          className={({ isActive, isPending }) =>
            isPending
              ? styles.topBarButton
              : isActive
              ? styles.topBarButtonActive
              : styles.topBarButton
          }
        >
          <i className="fa-solid fa-list"></i>
          <p className={styles.navTitle}>Products</p>
        </NavLink>
      </nav>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <div className={styles.userblock}>
        <NavLink
          to={`/User`}
          className={({ isActive, isPending }) =>
            isPending
              ? styles.topBarButton
              : isActive
              ? styles.topBarButtonActive
              : styles.topBarButton
          }
        >
          <i className="fa-solid fa-circle-user"></i>
          <p className={styles.navTitle}>User</p>
        </NavLink>
        <div onClick={handleOpenCart} className={styles.topBarButton}>
          <i className="fa-solid fa-cart-shopping"></i>
          <p className={styles.navTitle}>Shopping cart</p>
        </div>
      </div>
    </div>
  );
}
