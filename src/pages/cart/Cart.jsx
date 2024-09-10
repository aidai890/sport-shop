import { useSelector, useDispatch } from "react-redux";
import styles from "./cart.module.css";

const Cart = () => {
  const { itemCart } = useSelector((state) => state.cart);
  return (
    <div className="container">
      <div className={styles.content_cart}>
       
      </div>
      <div className={styles.cart}>
      {itemCart.map((el) => (
        <div key={el.id} className={styles.img_cart}>
          <div className={styles.carts_img}>
            <img className={styles.cart_img} src={el.images} alt="" />
          </div>
          <div className={styles.cart_price}>
            <h3>{el.name}</h3>
            <h3>{el.price}</h3>
          </div>
        </div>
      ))}
      </div>

    </div>
  );
};

export default Cart;
