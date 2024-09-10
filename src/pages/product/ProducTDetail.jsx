import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./product.module.css";
import stars from "../../assets/Stars.svg";
import grup from "../../assets/gruppa.svg";
import { useDispatch, useSelector } from "react-redux";
import { getSport } from "../../store/shopSlice";
import { setItenCart } from "../../store/cart/reducer";

const ProductDetail = (props) => {
  const { addToCart } = props; 
  const { SportData, isLoading, error } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    dispatch(getSport());
  }, [dispatch]); 

  const getProductById = async () => {
    try {
      const { data } = await axios.get(
        `https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/Shop/${params.productId}`
      );
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getProductById();
  }, [params.productId]); 

  const addCart =(product)=>{
    dispatch(setItenCart(product))
  }

  return (
    <div className="container">
      {product ? (
        <div className={styles.detail}>
          <div>
            <img className={styles.logo_img} width={600} src={product.images} alt="" />
          </div>
          <div className="info_pro">
            <div className={styles.text}>
              <h1>
                Tênis Nike Revolution
                <br /> 6 Next Nature Masculino
              </h1>
              <p>Casual | Nike | REF:38416711</p>
              <div className={styles.imagess}>
                <img src={stars} alt="" />
                <img src={grup} alt="" />
              </div>
            </div>
            <p className={styles.prices}>{product.price}</p>
            <div className={styles.cont}>
              <h5>Descrição do produto</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <p className={styles.raz}>Tamanho</p>
            <div className={styles.razmer}>
              <p>30</p>
              <p>45</p>
              <p>40</p>
              <p>41</p>
              <p>39</p>
            </div>
            <p className={styles.col}>Tamanho</p>
            <div className={styles.coloring}>
              <div className={styles.color_1}>
                <p></p>
              </div>
              <div className={styles.color_2}>
                <p></p>
              </div>
              <div className={styles.color_3}>
                <p></p>
              </div>
              <div className={styles.color_3}>
                <p></p>
              </div>
            </div>
              <div className={styles.btn_detail}>
                <button onClick={()=>addCart(product)}>
                  COMPRAR
                </button>
              </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className={styles.function}>
        {SportData.slice(1, 6).map((el) => (
          <h2 key={el.id}>
            <img
              className={styles.images_img}
              width={300}
              src={el.images}
              alt=""
            />
            <p className={styles.name}>  {el.name}</p>
            <div className={styles.pris}>
              <s>100 $</s>
              <p>{el.price}</p>
            </div>
          </h2>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
