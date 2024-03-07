import styles from "./TopBar.module.css";

export default function TopBar({ handleOpen, handleOpenUser }) {
  return (
    <div className={styles.TopBar}>
      <div onClick={handleOpenUser} className={styles.topBarButton}>
        <i className="fa-solid fa-circle-user"></i>
      </div>
      <div onClick={handleOpen} className={styles.topBarButton}>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
}
