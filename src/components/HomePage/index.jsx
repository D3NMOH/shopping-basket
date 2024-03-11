import styles from "./HomePage.module.css";
import smartphone from "../../assets/smartphone.jpeg";
import laptop from "../../assets/laptop.png";
import promo10 from "../../assets/promo10.png";
import gplay from "../../assets/gplay.png";
import appstore from "../../assets/appstore.svg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.storename}>Super Cool Electronics Store </p>
        <p className={styles.slogan}>Best goods, best prices!</p>
      </div>
      <div className={styles.promoList}>
        <div className={styles.barcodeContainer}>
          <img src={promo10} className={styles.barcode} alt="qrcode" />
          <div className={styles.barcodeText}>
            <i className="fa-solid fa-reply" style={{ fontSize: "40px" }}></i>
            <i
              className="fa-solid fa-mobile"
              style={{
                fontSize: "60px",
                marginLeft: "30px",
                marginBottom: "10px",
                color: "var(--accent-color)",
              }}
            ></i>
            <br />
            Scan the QR code with your smartphone in our app and get
            <p className={styles.discount}>10% off!</p>
            <div className={styles.stores}>
              <img src={gplay} className={styles.gplay} alt="gplay" />
              <img src={appstore} className={styles.appstore} alt="appstore" />
            </div>
          </div>
        </div>
        <div className={styles.itemList}>
          <div className={styles.item}>
            <Link to={`/Products/10`} className={styles.link}>
              <img
                src={smartphone}
                className={styles.promoImage}
                alt="Smartphone"
              />
              <div>
                <p>Smartphones</p>
                <p>Google Pixel 8 Smartphone</p>
                <p>
                  Google Pixel 8 - Android smartphone without SIM lock with
                  powerful Pixel camera, 24 hour battery life and powerful
                  security features - Obsidian, 128GB
                </p>
                <p className={styles.price}>Price 799€</p>
              </div>
            </Link>
          </div>
          <div className={styles.item}>
            <Link to={`/Products/11`} className={styles.link}>
              <img src={laptop} className={styles.promoImage} alt="Laptop" />
              <div>
                <p>Laptops</p>
                <p>ASUS ROG Strix Scar 16</p>
                <p>
                  ASUS ROG Strix Scar 16 WQXGA 240Hz i9-13980HX 32GB/2TB SSD
                  RTX4080 Win11
                </p>
                <p className={styles.price}>Price 3499€</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
