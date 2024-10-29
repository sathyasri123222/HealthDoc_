import { useEffect } from "react";
import styles from "./cart.module.css";

function Cart({ item, updateCart }) {
  useEffect(() => {}, []);

  return (
    <>
      <div>
        <div className={styles.cart}>
          {item.length > 0 ? (
            item.map((data, index) => (
              <div className={styles.one} key={index}>
                <h1>{data.name}</h1>
                <img src={data.img} alt="dd" className={styles.img} />
                <h3>price-{data.price}rs</h3>
                <button onClick={() => updateCart(data)}>Add to cart</button>
              </div>
            ))
          ) : (
            <p>No items available</p> 
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
