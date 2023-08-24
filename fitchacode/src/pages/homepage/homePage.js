import React from 'react';
import styles from "./homePage.module.scss";
import { Link } from 'react-router-dom';

function home_page() {
  return (
    <div className={styles.home_page}> 
         Главная страница
         <button className={styles.time__butt__text}>
                         <Link to="/Register">Регистрация</Link>
                 </button>
    </div>
  );
}

export default home_page;
