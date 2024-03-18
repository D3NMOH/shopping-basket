import styles from "./ProductList.module.css";
// import { goods } from "../../data/goods";
import { Link } from "react-router-dom";
import { UserContext } from "../context";
import React, { useContext, useState, useEffect } from "react";

export default function ProductList() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    fetch("https://shopping-basket-backend-u4xp.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setGoods(data.product));
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p className={styles.storename}>Our goods for you</p>
      <div className={styles.list}>
        {goods &&
          goods.map((item) => {
            return (
              <Link
                key={item._id}
                to={`/Products/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.item}>
                  <div className={styles.imgContainer}>
                    <img src={item.thumbnail} className={styles.imageInList} />
                    <img
                      src={item.thumbnail}
                      className={styles.imageInListGlow}
                    />
                  </div>
                  <div>
                    <p>{item.productName}</p>
                    <p>{item.description}</p>
                    <p className={styles.price}>{item.price} €</p>
                  </div>
                  <div className={styles.itemMark}>
                    <strong style={{ fontSize: "15px" }}>-10%</strong>
                    in App
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
