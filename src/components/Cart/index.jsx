import { useContext } from "react";
import { CartContext } from "../context/context";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const totalCost = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className={styles.cartBlock}>
      {cart.map((product) => (
        <div key={product.id} className={styles.cartItem}>
          <button
            onClick={() => removeFromCart(product.id)}
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
                {product.price * product.quantity}€
              </p>
            </div>
          </div>
        </div>
      ))}
      {cart.length > 0 ? (
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
      {cart.length > 0 ? (
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
};

export default Cart;
