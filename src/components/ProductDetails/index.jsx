import { useParams } from "react-router-dom";
import { goods } from "../../data/goods";
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
      style={
        {
          // backgroundImage: `url(${product.image})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }
      }
    >
      <img src={product.thumbnail} alt="laptop" className={styles.preview} />
      <div className={styles.description}>
        <div>
          <h1>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{product.price}</p>
        </div>
        <p>
          There are still <strong>{product.stock}</strong> Pcs available
        </p>
      </div>
    </div>
  );
}
