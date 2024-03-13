import { useParams } from "react-router-dom";
import { goods } from "../../data/goods";
import styles from "./ProductDetails.module.css";
import { useContext } from "react";
import { CartContext } from "../context/context";

export function ProductDetails() {
  const { prodId } = useParams();
  const product = goods.find((product) => product.id === parseInt(prodId));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return (
      <section className="section404">
        <div>
          <h1>4 0 4</h1>
        </div>
      </section>
    );
  }

  return (
    <div
      className={styles.productdetails}
      style={
        {
          // backgroundImage: `url(${product.image})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }
      }
    >
      <h1 className={styles.title}>{product.title}</h1>
      <div className={styles.preview}>
        <img
          src={product.thumbnail}
          alt="product image"
          className={styles.previewImg}
        />
        <img
          src={product.thumbnail}
          alt="product image"
          className={styles.previewImgGlow}
        />
      </div>
      <div className={styles.description}>
        <div>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{product.price} €</p>
        </div>
        <p>
          There are still <strong>{product.stock}</strong> Pcs available
        </p>
        <button
          className={styles.prodButton}
          onClick={() => addToCart(product)}
        >
          Add to your cart <i className="fa-solid fa-circle-plus"></i>
        </button>
      </div>
    </div>
  );
}
