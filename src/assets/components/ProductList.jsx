import styles from "./ProductList.module.css";
import { goods } from "../../data/goods";

export default function ProductList() {
  return (
    <div className={styles.list}>
      Hello product list!!!
      {goods.map((item) => {
        return (
          <div key={item.id} className={styles.item}>
            <img src={item.thumbnail} className={styles.imageInList} />

            <div>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
            <div>
              <p>{item.stock} Pcs are still available</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
