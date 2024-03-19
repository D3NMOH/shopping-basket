import styles from "./HomePage.module.css";
import smartphone from "../../assets/smartphone.jpeg";
import laptop from "../../assets/laptop.png";
import promo10 from "../../assets/promo10.png";
import gplay from "../../assets/gplay.png";
import appstore from "../../assets/appstore.svg";
import { Link } from "react-router-dom";
import { promote } from "../../data/promote";
import { useEffect, useState } from "react";
import saleImg from "../../assets/sale.svg";

export default function HomePage() {
  const [sale, setSale] = useState([]);

  useEffect(() => {
    fetch("https://shopping-basket-backend-u4xp.onrender.com/sales")
      .then((response) => response.json())
      .then((data) => {
        console.log("ergebnisse", data.sales);
        setSale(data.sales);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.storename}>Welcome to Grapefruit Tech!</p>
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
          {sale.map((item) => {
            return (
              <Link key={item._id} style={{ textDecoration: "none" }}>
                <div className={styles.item}>
                  <div className={styles.promoImageContainer}>
                    <img src={item.thumbnail} className={styles.promoImage} />
                    <img
                      src={item.thumbnail}
                      className={styles.promoImageGlow}
                    />
                  </div>
                  <div style={{ maxWidth: "200px" }}>
                    <p className={styles.title}>{item.productName}</p>
                  </div>
                  <p className={styles.price}>{item.price} €</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
