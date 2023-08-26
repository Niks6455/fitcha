import React from "react";
import styles from "./lodging.module.scss";
import Layout from "../../component/Layout/Layout";
import Headers from "../../component/header/header";
import { Link } from "react-router-dom";
import Button from "../../component/button/button";
import hotel from "./../../images/hotel1.svg";
function Lodging() {
  return (
    <Layout>
      <Headers></Headers>

      <div className={styles.lodging}>
        <p className={styles.name}>Проживание</p>
        <div className={styles.card}>
          <div className={styles.card_inner}>
            <div className={styles.headcard}>
              <p>Wyndham Dubai Marina</p>
              <img src="./img/icon/serdce.svg" alt="L"></img>
            </div>
            <div className={styles.card_img}>
              <img src={hotel} alt="L"></img>
            </div>
            <div className={styles.tocka_inner}>
              <div className={styles.tockaactive}></div>
              <div className={styles.tocka}></div>
              <div className={styles.tocka}></div>
            </div>

            <div className={styles.Card_info}>
              <div className={styles.card_cena}>
                <p className={styles.card_zent}>
                  Стоимость от <span>8000</span>руб./ночь
                </p>
              </div>
              <div className={styles.rare}>
                <p>Рейтинг:</p>
                <img src="./img/icon/star.png"></img>
                <img src="./img/icon/star.png"></img>
                <img src="./img/icon/star.png"></img>
                <img src="./img/icon/star.png"></img>
                <img src="./img/icon/star.png"></img>
              </div>
            </div>

            <div className={styles.opis}>
              <p className={styles.opis_title}>
                <strong>Описание</strong>
              </p>
              <p className={styles.opis_subtitle}>
                При отеле открыто несколько ресторанов и баров, в том числе
                ресторан The Blacksmith, где подают различные виды копченого
                мяса, а также итальянский ресторан Alloro Ristorante, в котором
                можно заказать завтрак, обед и ужин по меню.
              </p>
              <p className={styles.opis_title}>
                <strong>Удобства</strong>
              </p>
              <ul>
                <li>Фитнес-центр</li>
                <li>Бассейн</li>
                <li>Конференц-залы для мероприятий</li>
                <li>Круглосуточное обслуживание</li>
              </ul>
              <p className={styles.opis_title}>
                <strong>Особенности</strong>
              </p>
              <ul>
                <li>Отель расположен около самых знаменитых мест</li>
                <li>
                  Отель в центре Новосибирска предлагает просторные номера,
                </li>
                <li>
                  Отель в Новосибирске предлагает первоклассно оборудованные
                  залы
                </li>
              </ul>
            </div>
            <div className={styles.podr}>
              <Link style={{ textDecoration: "none", color: "#2032D3" }}>
                Подробнее...
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link to="/Active">
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
export default Lodging;
