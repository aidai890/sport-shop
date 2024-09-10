import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from './SignUp.module.css'
import { createUser } from "../../store/slices/signUpSlices";

const SignUp = ({ setIsVisible }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    setIsVisible(false);
  };


  
  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        let authDiv = e.target.closest("#test");
        if (!authDiv || authDiv.classList.value === styles.auth) {
          return;
        }
        setIsVisible(false);
      }}
    >
      <div className={styles.auth} id="test">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="email..."
            name="email"
            value={userData.email}
            required
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="name..."
            name="name"
            value={userData.name}
            required
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="password..."
            name="password"
            value={userData.password}
            required
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="img url..."
            name="avatar"
            value={userData.avatar}
            required
          />
          <input className={styles.submit} type="submit" />

        </form>
      </div>
    </div>
  );
};

export default SignUp;
