import styles from "./footer.module.css";
import React from "react";
import { useTranslation } from "react-i18next";
import homeLogo from "../../assets/fooLogo.svg";
import tvit from "../../assets/tvit.svg";
import fa from "../../assets/fa.svg";
import insta from "../../assets/insta.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.footer_cont}>
        {/* <div className={styles.footer}> */}
        <div className="container">
          <div className={styles.footer_title}>
            <div className={styles.title}>
              <div className={styles.footer_logo}>
                {/* <img src={vertor} alt="" /> */}
                <img className={styles.digital} src={homeLogo} alt="" />
              </div>

              <div className={styles.lorem_text}>
                <p>
                  {t(
                    "Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                  )}
                </p>
              </div>

              <div className={styles.footer_images}>
                <Link to='https://www.facebook.com/?locale=ru_RU'>
                  <img src={fa} alt="" />
                </Link>
                <Link to='https://www.instagram.com/'>
                  <img src={insta} alt="" />
                </Link>
                <Link to='https://twitter.com/?lang=ru'>
                  <img src={tvit} alt="" />
                </Link>
              </div>
            </div>

            <div className={styles.infor}>
              <span>{t("Informação")}</span>
              <p>
                <br />
                {t("Sobre Drip Store")}
                <br />
                {t("Segurança")}
                <br />
                {t("Wishlist")}
                <br />
                {t("Blog")}
                <br />
                {t("Trabalhe conosco")}
                <br />
                {t("Meus Pedidos")}
              </p>
            </div>
            <div className={styles.catego}>
              <span>{t("Categorias")}</span>
              <p>
                <br />
                {t("Camisetas")}
                <br />
                {t("Calças")}
                <br />
                {t("Bonés")}
                <br />
                {t("Headphones")}
                <br />
                {t("Tênis")}
              </p>
            </div>

            <div className={styles.conta}>
              <span>{t("Contato")}</span>
              <p>
                <br />
                {t(" Av. Santos Dumont, 1510 - 1")}
                <br />
                {t(" andar - Aldeota, Fortaleza - ")}
                <br />
                {t("CE, 60150-161")}
              </p>
              <p>{t("(85) 3051-3411")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.digi}>
        <div className="container">
          <div className={styles.footer_footer}>
            <p> @ 2022 Digital College</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
