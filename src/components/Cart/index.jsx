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
          setProducts(data.cartItem);
        });
    };

    fetchProducts();
  }, []);
  const clearCart = async () => {
    const response = await fetch(
      `https://shopping-basket-backend-u4xp.onrender.com/users/${userId}/cart`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to clear cart");
    }
  };
  const totalPrice =
    products &&
    products.reduce((acc, product) => acc + product.product.price, 0);
  return (
    <div className={styles.cartBlock}>
      {products && products.length > 0
        ? products &&
          products.map(({ product }) => {
            return (
              <div key={product._id} className={styles.cartItem}>
                {/* <button
                  onClick={() => removeFromCart(product._id)}
                  className={styles.cartRemovButton}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button> */}
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
                      {/* <p className={styles.qty}>Qty: </p>
                      <div className={styles.quantity}>
                        <button
                          className={styles.decrease}
                          onClick={() => decreaseQuantity(product._id)}
                        >
                          -
                        </button>
                        <p style={{ textAlign: "center", padding: "20px" }}>
                          1
                        </p>
                        <button
                          className={styles.increase}
                          onClick={() => increaseQuantity(product._id)}
                        >
                          +
                        </button>
                      </div> */}
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
          })
        : ""}
      {products && products.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "20px",
          }}
        >
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
            {products && products.length > 0 ? `${totalPrice}€` : ""}
          </p>
          <button
            onClick={clearCart}
            className="cartButton"
            style={{ width: "max-content" }}
          >
            <i className="fa-solid fa-close"></i>Crear cart
          </button>
        </div>
      ) : (
        ""
      )}
      {products && products.length > 0 ? (
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
