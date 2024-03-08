import styles from "./TopBar.module.css";
import Logo from "../../assets/icon.png";

export default function TopBar({ handleOpenCart }) {
  return (
    <div className={styles.TopBar}>
      <div className={styles.topBarButton}>
        <i className="fa-solid fa-circle-user"></i>
      </div>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <div onClick={handleOpenCart} className={styles.topBarButton}>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
}
