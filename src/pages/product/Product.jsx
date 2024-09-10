import React, { useEffect, useState } from "react";
import styles from "./product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSport } from "../../store/shopSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Product = () => {
  const { t, i18n } = useTranslation();
  const [popup,setPopup]=useState(false)
  const { SportData, isLoading, error } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(getSport());
  }, []);
  return (
    <div className={styles.product} >
      <div className="container">
        <div >
          
            <div className={styles.texts}>
              <h4>{t("Resultados para “Tênis”")}</h4>-<p>389 produtos</p>
            </div>
          
          <div className={styles.img}>
            <div className={styles.content}>
              <h3>{t("Filtrar por")}</h3>
              <hr />
              <div className={styles.marka}>
                <form>
                  <h4>{t("Marka")}</h4>
                  <input
                    className={styles.input}
                    type="checkbox"
                    name="box"
                    id=""
                  />  
                  <label htmlFor="box">{t("Adiddas")}</label>
                  <br />
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("Calenciaga")}</label>
                  <br />
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("K-Swiss")}</label>
                  <br />
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("Nike")}</label>
                  <br />
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("Puma")}</label>
                  <br />
                </form>
              </div>
              <div className={styles.marka}>
                <form>
                  <h4>{t("Categoria")}</h4>
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("Esporte e lazer")}</label>
                  <br />
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("Casual")}</label>
                  <br />
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("Utilitário")}</label>
                  <br />
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("Corrida")}</label>
                  <br />
                </form>
              </div>
              <div className={styles.marka}>
                <form>
                  <h4>{t("Gênero")}</h4>
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("Masculino")}</label>
                  <br />
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("Feminino")}</label>
                  <br />
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("Unisex")}</label>
                  <br />
                </form>
              </div>
              <div className={styles.marka}>
                <form>
                  <h4>{t("Estado")}</h4>
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("Novo")}</label>
                  <br />
                  <input type="checkbox" name="box" id="" />
                  <label htmlFor="box">{t("Usado")}</label>
                  <br />
                </form>
              </div>
            </div>

            <div className={styles.function}>
              {SportData.slice(1, 16).map((el) => (
                <h2 key={el.id}>
                <Link to={`/detail/${el.id}`}>
                <img
                    className={styles.images_img}
                    width={400}
                    src={el.images}
                    alt=""
                  />
                </Link>
                  <p className={styles.name}> {el.name}</p>
                  <div className={styles.pris}>
                    <s>100 $</s>
                    <p>{el.price}</p>
                  </div>
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
