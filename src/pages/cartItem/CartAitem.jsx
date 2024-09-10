import React from "react";
import styles from "./cartItem.module.css";
import { useSelector } from "react-redux";

const CartAitem = () => {
  const { itemCart } = useSelector((state) => state.cart);

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.boxis}>
          <div className={styles.box}>
            <div className={styles.text}>
              <p>MEU CARRINHO</p>
            </div>
            <div className={styles.text_2}>
              <p>QUANTIDADE</p>
              <p>UNITÁRIO</p>
              <p>TOTAL</p>
            </div>
          </div>
          <div>
            {itemCart.map((el) => (
              <div key={el.id} className={styles.cart}>
                <div className={styles.carts_img}>
                  <img src={el.images} width={100} alt="" />
                </div>
                <div className={styles.name}>
                  <h3>{el.name}</h3>
                </div>
                <div className={styles.cont}>
                  <div className={styles.btn}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className={styles.prices}>
                    <h3>{el.price}</h3>
                  </div>
                  <span className={styles.spans}>0 $</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.box_2}>
          <div className={styles.list}>
            <div className={styles.logo}>
              <h2>RESUMO</h2>
            </div>
            <div className={styles.nav}>
              <div className={styles.nav_text}>
                <p>Subtotal:</p>
                R$ 219,00
              </div>
              <div className={styles.nav_text}>
                <p>Frete:</p>
                R$ 0,00
              </div>

              <div className={styles.nav_text}>
                <p>Desconto:</p>
                R$ 30,00
              </div>

              <div className={styles.nav_text}>
                <h4>Total</h4>
                <span className={styles.spa}> R$ 219,00</span>
              </div>
            </div>
            <button className={styles.button}>Continuar</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartAitem;
