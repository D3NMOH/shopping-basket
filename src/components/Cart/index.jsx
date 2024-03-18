import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/context";
import styles from "./Cart.module.css";
import { UserContext } from "../context/index";

export default function Cart() {
  const { userId } = useContext(UserContext);
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity } =
    useContext(CartContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      fetch(`https://shopping-basket-backend-u4xp.onrender.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("ergebnissse", data.cartItem);
          setProducts(data.cartItem);
        });
    };

    fetchProducts();
  }, []);

  const totalCost = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className={styles.cartBlock}>
      {products.map(({ product }) => {
        return (
          <div key={product._id} className={styles.cartItem}>
            <button
              onClick={() => removeFromCart(product._id)}
              className={styles.cartRemovButton}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
            <div className={styles.cartGrid}>
              <div className={styles.imgContainer}>
                <img
                  src={product.thumbnail}
                  alt="product"
                  className={styles.imageInList}
                />
                <img
                  src={product.thumbnail}
                  alt="product"
                  className={styles.imageInListGlow}
                />
              </div>
              <div className={styles.cartNestedGrid}>
                <h2 className={styles.title}>{product.productName}</h2>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    right: "0px",
                    alignSelf: "flex-end",
                  }}
                >
                  <p className={styles.qty}>Qty: </p>
                  <div className={styles.quantity}>
                    <button
                      className={styles.decrease}
                      onClick={() => decreaseQuantity(product._id)}
                    >
                      -
                    </button>
                    <p style={{ textAlign: "center", padding: "20px" }}>
                      here will be counter
                    </p>
                    <button
                      className={styles.increase}
                      onClick={() => increaseQuantity(product._id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p
                  style={{
                    backgroundColor: "var(--accent-color)",
                    padding: "5px",
                    borderRadius: "7px",
                    color: "#fff",
                    fontSize: "20px",
                    width: "max-content",
                    fontWeight: 500,
                    textAlign: "right",
                    justifySelf: "right",
                  }}
                >
                  {product.price}€
                </p>
              </div>
            </div>
          </div>
        );
      })}
      {products.length > 0 ? (
        <p
          style={{
            backgroundColor: "var(--accent-color)",
            padding: "5px",
            borderRadius: "7px",
            color: "#fff",
            fontSize: "20px",
            width: "max-content",
            fontWeight: 500,
            textAlign: "right",
            justifySelf: "right",
          }}
        >
          {totalCost}€
        </p>
      ) : (
        ""
      )}
      {products.length > 0 ? (
        <div className="cartButton">
          <i className="fa-solid fa-wallet"></i> Checkout
        </div>
      ) : (
        <p
          style={{
            fontSize: "40px",
            textAlign: "center",
            fontWeight: "700",
            textShadow: "0 0 20px #fff",
          }}
        >
          Your cart is empty 😢
        </p>
      )}
    </div>
  );
}
