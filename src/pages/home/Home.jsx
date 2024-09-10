import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./home.module.css";
import boots from "../../assets/boots.png";
import tochka from "../../assets/tochka.png";
import naush from "../../assets/naush.png";
import bots from "../../assets/bots.png";
import futbol from "../../assets/futbol.png";
import boot from "../../assets/boot.svg";
import naushnic from "../../assets/naushnic.svg";
import br from "../../assets/br.svg";
import fut from "../../assets/fut.svg";
import { getSport } from "../../store/shopSlice";
import buts from "../../assets/buts.png";
import togolok from "../../assets/togolok.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t} = useTranslation();
  const { SportData, isLoading, error } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  console.log("SportData", SportData);

  useEffect(() => {
    dispatch(getSport());
  }, []);

  return (
    <div className={styles.home_cont}>
      <div className={styles.content_home}>
        <div className="container">
          <div className={styles.logo}>
            <div className={styles.text}>
              <h5>{t("Melhores ofertas personalizadas")}</h5>
              <h1>{t("Queima de stoque Nike")}</h1>
              <p>
                {t(
                  "Consequat culpa exercitation mollit nisi excepteur do do temporlaboris eiusmod irure consectetur"
                )}
              </p>
              <button>{t("Ver Ofertas")}</button>
            </div>

            <div className={styles.home_img}>
              <img src={boots} width={650} alt="" />
              <div>
                <img src={tochka} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.color}>
          <div className={styles.text_home}>
            <h1>{t("Coleções em destaque")}</h1>
          </div>
          <div className={styles.img_cont}>
            <div className={styles.box}>
              <div className={styles.texts}>
                <span>30% OFF</span>
                <h2>{t(" Novo drop Supreme")}</h2>
                <button>{t("Comprar")}</button>
              </div>
              <div>
                <img src={futbol} alt="" />
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.texts}>
                <span>30% OFF</span>
                <h1>{t("Coleção Adidas")}</h1>
                <button>{t("Comprar")}</button>
              </div>
              <div>
                <img src={bots} alt="" />
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.texts}>
                <span>30% OFF</span>
                <h1>{t("Novo Beats Bass")}</h1>
                <button>{t("Comprar")}</button>
              </div>
              <div>
                <img src={naush} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.logo_text}>
            <h1>{t("Coleções em destaque")}</h1>
          </div>
        </div>
        <div className={styles.cont_img_img}>
          <img src={fut} alt="" />
          <img src={br} alt="" />
          <img src={br} alt="" />
          <img src={naushnic} alt="" />
          <img src={boot} alt="" />
        </div>

        <div className={styles.function}>
          {SportData.slice(1, 9).map((el) => {
            return (
              <h2 key={el.id}>
                <Link to={`/detail/${el.id}`}>
                  <img
                    className={styles.images_img}
                    width={300}
                    src={el.images}
                    alt=""
                  />
                </Link>
                <p> {el.name}</p>
                <div className={styles.prices}>
                  <s>100$</s>
                  <p>{el.price}</p>
                </div>
              </h2>
            );
          })}
        </div>
      </div>
      <div className={styles.title_img}>
        <div className="container">
          <div className={styles.flex}>
            <div className={styles.title_images}>
              <img
                className={styles.imageses}
                width={350}
                src={togolok}
                alt=""
              />
            </div>
            <div className={styles.logo__text}>
              <h5>{t("Oferta especial")}</h5>
              <h1>{t(" Air Jordan edição decolecionador")}</h1>
              <p>
                {t(
                  "   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip"
                )}
              </p>
              <button>{t("Ver Oferta")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
