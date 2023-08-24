import React from "react";
import style from "./SelectionTour.module.scss";
function SelectionTour() {
  return (
    <div className={style.selection_tour}>
      <div className={style.logo}>
        <img src="./img/logo/logo.png" alt="logo"></img>
      </div>
      <h2>Мы поможем подобрать для вас самый подходящий тур в пару кликов!</h2>
      <h2>
        Составь маршрут по <span style={{ color: "#2032D3" }}>своим</span>{" "}
        предпочтениям
      </h2>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src="./img/icon/cart1.svg" alt="logo"></img>
      </div>
      <div style={{ marginTop: "40px" }} className={style.button}>
        <div className={style.button_inner}>Создать тур</div>
      </div>
      <h2>ИЛИ</h2>
      <h2>
        Выберите среди <span style={{ color: "#2032D3" }}>популярных</span>
      </h2>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src="./img/icon/cart2.svg" alt="logo"></img>
      </div>
      <div style={{ marginTop: "40px" }} className={style.button}>
        <div className={style.button_inner}>Подобрать тур</div>
      </div>
    </div>
  );
}
export default SelectionTour;
