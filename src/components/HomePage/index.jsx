import styles from "./HomePage.module.css";
import smartphone from "../../assets/smartphone.jpeg";
import laptop from "../../assets/laptop.png";
import promo10 from "../../assets/promo10.png";
import gplay from "../../assets/gplay.png";
import appstore from "../../assets/appstore.svg";
import { Link } from "react-router-dom";
import { promote } from "../../data/promote";

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
          {promote.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/Products/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.item}>
                  <img src={item.thumbnail} className={styles.promoImage} />
                  <div>
                    <p className={styles.title}>{item.title}</p>
                    <p>{item.description}</p>
                    <p className={styles.price}>{item.price} €</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
