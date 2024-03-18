import { useParams } from "react-router-dom";
// import { goods } from "../../data/goods";
import styles from "./ProductDetails.module.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/context";
import Rating from "@mui/material/Rating";

export function ProductDetails() {
  const { prodId } = useParams();
  const [product, setProduct] = useState(null);
  const [stars, setStars] = useState(0);

  // const product = goods.find((product) => product._id === parseInt(prodId));

  useEffect(() => {
    fetch(
      `https://shopping-basket-backend-u4xp.onrender.com/products/${prodId}`
    )
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [prodId]);

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
    <div className={styles.productdetails}>
      <h1 className={styles.title}>{product.productName}</h1>
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
      <p className={`${styles.description} ${styles.about}`}>{product.about}</p>
      <div className={styles.props}>
        <p>
          Available colors:
          <ul>
            {product.color.map((color) => {
              return <li key={color}>{color}</li>;
            })}
          </ul>
        </p>
        <p>Size: {product.size}</p>
      </div>
      <div className={styles.priceCont}>
        <p className={styles.price}>{product.price} €</p>
        <p>{product.vatText}</p>
      </div>
      <Rating
        name="simple-controlled"
        value={product.rating}
        onChange={(event, newValue) => {
          setStars(newValue);
        }}
        className={styles.stars}
      />
      <p className={styles.stock}>
        There are still <strong>{product.availableInStock}</strong> Pcs
        available
      </p>
      <p className={styles.delivery}>Delivery time: {product.delivery}</p>
      <button className={styles.prodButton} onClick={() => addToCart(product)}>
        Add to your cart <i className="fa-solid fa-circle-plus"></i>
      </button>
    </div>
  );
}
