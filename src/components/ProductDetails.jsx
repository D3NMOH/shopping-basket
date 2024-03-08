import { useParams } from "react-router-dom";
import { goods } from "../data/goods";
import styles from "./ProductDetails.module.css";

export function ProductDetails() {
  const { prodId } = useParams();
  const product = goods.find((product) => product.id === parseInt(prodId));

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
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.description}>
        {/* <img className={styles.preview} src={product.image} alt={product.title} /> */}
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.tagline}>{product.stock}</p>
      </div>
    </div>
  );
}
