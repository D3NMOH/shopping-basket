import styles from "./TopBar.module.css";

export default function TopBar({ handleOpen }) {
  return (
    <div className={styles.TopBar}>
      Top Bar Login usw.
      <div onClick={handleOpen} className={styles.cartButton}>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
}
