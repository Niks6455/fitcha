import React from 'react';
import styles from "./eade.module.scss";
import Layout from "../../component/Layout/Layout";
import Headers from "../../component/header/header";
import ActiveCard from "./../../component/activcard/ActiveCard";
import Button from "../../component/button/button";
import imgcard from "./../../images/card_eade.svg"


function Eade() {

  return (   
    <Layout> 
    <Headers></Headers>
  
      <div className={styles.lodging}>
      <p className={styles.name}>Гастрономический тур</p>
      <div className={styles.card}>
        <div className={styles.card_inner}>
          <div className={styles.Card_info}>
            <div className={styles.card_info_block1}>
                <div className={styles.card_cena}><p className={styles.card_zent}>День 1</p></div>
                <div className={styles.rare}><p>Стоимость = <span>5 000 руб.</span></p>
                </div>
            </div>
            <div className={styles.headcard}>
              <img src="./img/icon/serdce.svg"></img>
            </div>
          </div>
          
          <div className={styles.card_img}>
            <img src={imgcard}></img>
          </div>
         
            <ActiveCard  name= {"The Peacock"} count = {"1"} text={"The Peacock один из лучших ресторанов, находящийся на территории круглосуточного отеля Sheraton Jumeirah Beach  врата -  архитектурная достопримечательность в парке Забиль. Объект является рекордсменом по величине кадра в мире."} />
          
          <ActiveCard count = {"2"} text={"Уникальный ресторан Suvoroff располагает к уютному и вкусному вечеру в истинной роскоши Дубая. "} name={"Suvoroff JBR (Restaurant & Cafe)"}/>
          <ActiveCard count = {"3"} text={"В ресторане Demon Duck вас ожидает яркая атмосфера отдыха, зрелищные театральные постановки, Гонконгские коктейли в баре с  меню паназиатских блюд."} name={"Demon Duck"}/>
         

         
        </div>
        
      </div>
      <div className={styles.buttons}>
         <Button w={"165"} h={"45"} size={"20"} text_color={"#fff"} bg_color={"#2032D3"} text={"Сохранить"}></Button>
        <Button w={"165"} h={"45"} size={"20"} text_color={"#fff"} bg_color={"#AEAEAE"} text={"Заменить"}></Button>
      </div>
     
      </div>
    </Layout>
  );
}
export default Eade;
