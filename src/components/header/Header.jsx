import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getFromLS } from "../../store/slices/signUpSlices";
import styles from "./header.module.css";
import logo from "../../assets/homeLogo.svg";
import korzina from "../../assets/korzina.svg";
import { Input } from "antd";
import Cart from "../../pages/cart/Cart";

const Header = ({ changeVisible }) => {
  const [popup, setPopup] = useState(false);
  const [getUser, setGetUser] = useState();
  const { itemCart } = useSelector((state) => state.cart);
  const { userData } = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  let user = localStorage.getItem("auth");
  useEffect(() => {
    dispatch(getFromLS());
    setGetUser(user);
  }, [dispatch, user]);

  function header(language) {
    const lang = language.target.value;
    i18n.changeLanguage(lang);
  }
  function deleteUser() {
    localStorage.removeItem("auth");
    document.location.reload();
  }

  console.log(userData);

  return (
    <div className="container">
      <div className={styles.header}>
        <div className="container">
          <div className={styles.title}>
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
            <Input type="text" placeholder={t("Pesquisar produto")} />
            <p className={styles.regis} onClick={changeVisible}>
              {t("Cadastre-se")}
            </p>
            {userData && (
              <div>
                <img src={userData.avatar} alt="" />
                <span>{userData.name}</span>
                {getUser && (
                  <button onClick={() => deleteUser()}>delete</button>
                )}
              </div>
            )}
            <button>{t("Entrar")}</button>
            <img
              className={styles.images}
              onClick={() => {
                setPopup(!popup);
              }}
              src={korzina}
              alt=""
            />
            {popup && (
              <div className={styles.popup}>
                <Cart />
                <div className={styles.btns}>
                  <Link to="/item">
                    <button>Ver Carrinho</button>
                  </Link>
                </div>
              </div>
            )}
            <span>{itemCart.length}</span>
          </div>
          <div className="select">
            <select className="select" onChange={header}>
              <option value={"pt"}>PT</option>
              <option value={"en"}>EN</option>
              <option value={"ru"}>RU</option>
            </select>
          </div>

          <div className={styles.content}>
            <ul>
              <li>
                <Link to={"/"}>{t("Home")}</Link>
              </li>
              <li>
                <Link to={"/product"}>{t("Product")}</Link>
              </li>
              <li>
                <Link to={"/category"}>{t("Category")}</Link>
              </li>
              <li>
                <Link to={"/menu"}>{t("Menu")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
