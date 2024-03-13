import { useContext } from "react";
import { CartContext } from "../context/context";
import { ClassNames } from "@emotion/react";
import styles from "./Cart.module.css";
import Button from "@mui/material/Button";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  return (
    <div>
      {cart.map((product) => (
        <div key={product.id} className={styles.cartItem}>
          <button
            onClick={() => removeFromCart(product.id)}
            className={styles.cartButton}
            style={{
              position: "absolute",
              alignSelf: "self-end",
              justifySelf: "right",
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <h2>{product.title}</h2>
          <p>Quantity: </p>
          <div className={styles.quantity}>
            <button
              className={styles.cartButton}
              onClick={() => decreaseQuantity(product.id)}
            >
              -
            </button>
            <p style={{ textAlign: "center", padding: "20px" }}>
              {product.quantity}
            </p>
            <button
              className={styles.cartButton}
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
