import styles from "./ProductList.module.css";
import { goods } from "../../data/goods";
import { Link } from "react-router-dom";

export default function ProductList() {
  return (
    <div className={styles.list}>
      {goods.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/Products/${item.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.item}>
              <img src={item.thumbnail} className={styles.imageInList} />
              <div>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p className={styles.price}>{item.price}</p>
              </div>
              <div className={styles.itemMark}>-30%</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
