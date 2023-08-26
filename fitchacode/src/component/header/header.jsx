import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

function header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div>
          <img src="./img/logo/logo2.svg"></img>
        </div>
        <div>
          <Link to="./../SelectionTour">
            <img className={styles.btheader} src="./img/icon/home.png"></img>
          </Link>
          <Link to="lk">
            <img className={styles.btheader} src="./img/icon/lk.png"></img>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default header;
