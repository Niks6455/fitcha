import React from "react";
import styles from "./active.module.scss";
import Layout from "../../component/Layout/Layout";
import Headers from "../../component/header/header";
import ActiveCard from "./../../component/activcard/ActiveCard";
import Button from "../../component/button/button";
import imgcard from "./../../images/2.svg";
import { Link } from "react-router-dom";

function Active() {
  return (
    <Layout>
      <Headers></Headers>

      <div className={styles.lodging}>
        <p className={styles.name}>Активности</p>
        <div className={styles.card}>
          <div className={styles.card_inner}>
            <div className={styles.Card_info}>
              <div className={styles.card_info_block1}>
                <div className={styles.card_cena}>
                  <p className={styles.card_zent}>День 1</p>
                </div>
                <div className={styles.rare}>
                  <p>
                    Маршрут 1 = <span>75 000 руб.</span>
                  </p>
                </div>
              </div>
              <div className={styles.headcard}>
                <img src="./img/icon/serdce.svg"></img>
              </div>
            </div>

            <div className={styles.card_img}>
              <img src={imgcard}></img>
            </div>

            <ActiveCard
              name={"Звездные врата"}
              count={"1"}
              text={
                "Звездные врата -  архитектурная достопримечательность в парке Забиль. Объект является рекордсменом по величине кадра в мире."
              }
            />

            <ActiveCard
              count={"2"}
              text={
                "Музей будущего — это ориентир, посвященный новаторским и футуристическим идеологиям."
              }
              name={"Музей будущего"}
            />
            <ActiveCard
              count={"3"}
              text={"Рыболовный клуб в Дубае, Объединенные Арабские Эмираты"}
              name={"Рыболовный клуб"}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <Link to="/Eade">
            <Button
              w={"165"}
              h={"45"}
              size={"20"}
              text_color={"#fff"}
              bg_color={"#2032D3"}
              text={"Сохранить"}
            ></Button>
          </Link>
          <Button
            w={"165"}
            h={"45"}
            size={"20"}
            text_color={"#fff"}
            bg_color={"#AEAEAE"}
            text={"Заменить"}
          ></Button>
        </div>
      </div>
    </Layout>
  );
}
export default Active;
