import React, { useContext } from "react";
import { UserContext } from "../context";
import styles from "./CartItem.module.css";

const CartItem = (probs) => {
  const { product } = probs;
  const { increase, decrease, removeItem } = useContext(UserContext);
  return (
    <div className={styles.listItem}>
      <img
        className={styles.listItemImage}
        src={product.image}
        alt={product.name}
      />
      <div className={styles.listItemInfo}>
        <span>
          <h3>{product.name}</h3>
          <small>{product.author}</small>
        </span>
        <span style={{ display: "flex" }}>
          <span>
            <b>Price:</b> {product.price.toFixed(2)} <br />
          </span>
          {product.count > 1 && (
            <>
              <span style={{ marginLeft: "1rem" }}>
                <b>Count: </b>x{product.count}
              </span>
              <span style={{ marginLeft: "1rem" }}>
                <b>Total:</b> ₺ {(product.price * product.count).toFixed(2)}
              </span>
            </>
          )}
        </span>
        <div>
          <button onClick={() => decrease(product)} className={styles.cartBtn}>
            {" "}
            -{" "}
          </button>
          <button
            onClick={() => removeItem(product.id)}
            className={styles.removeBtn}
          >
            delete
          </button>
          <button onClick={() => increase(product)} className={styles.cartBtn}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
