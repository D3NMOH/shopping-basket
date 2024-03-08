import styles from "./HomePage.module.css";
import smartphone from "../assets/smartphone.jpeg";
import laptop from "../assets/laptop.png";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.storename}>Super Cool Electronics Store </p>
        <p className={styles.slogan}>Best goods, best prices!</p>
      </div>
      <div className={styles.item}>
        <img src={smartphone} className={styles.promoImage} alt="Smartphone" />
        <div>
          <p>Smartphones</p>
          <p>Google Pixel 8 Smartphone</p>
          <p>
            Google Pixel 8 - Android smartphone without SIM lock with powerful
            Pixel camera, 24 hour battery life and powerful security features -
            Obsidian, 128GB
          </p>
          <p className={styles.price}>Price 799€</p>
        </div>
      </div>
      <div className={styles.item}>
        <img src={laptop} className={styles.promoImage} alt="Laptop" />
        <div>
          <p>Laptops</p>
          <p>ASUS ROG Strix Scar 16</p>
          <p>
            ASUS ROG Strix Scar 16 WQXGA 240Hz i9-13980HX 32GB/2TB SSD RTX4080
            Win11
          </p>
          <p className={styles.price}>Price 3499€</p>
        </div>
      </div>
    </div>
  );
}
