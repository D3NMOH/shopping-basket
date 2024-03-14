import { useContext } from "react";
import { CartContext } from "../context/context";
import { ClassNames } from "@emotion/react";
import styles from "./Cart.module.css";
import Button from "@mui/material/Button";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  return (
    <div className={styles.cartBlock}>
      {cart.map((product) => (
        <div key={product.id} className={styles.cartItem}>
          <button
            onClick={() => removeFromCart(product.id)}
            className={styles.cartRemovButton}
            style={{}}
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
              <h2 className={styles.title}>{product.title}</h2>
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
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  <p style={{ textAlign: "center", padding: "20px" }}>
                    {product.quantity}
                  </p>
                  <button
                    className={styles.increase}
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
