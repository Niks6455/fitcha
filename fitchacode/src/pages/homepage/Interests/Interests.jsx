import React from "react";
import style from "./Interests.module.scss";
function Interests() {
  const arr = [
    "Памятники",
    "Искуссвто",
    "Театры",
    "Музеи",
    "Храмы",
    "Шопинг",
    "Природа",
    "Пляжи",
    "Парки",
    "Активный отдых",
    "Развлечения",
    "Животные",
    "Рестораны",
    "Кофейни",
    "Быстрое питание",
    "Столовые",
  ];
  //   for (var i = 1; i <= 16; i++) {
  //     arr.push({ img: `icon${i}b` });
  //   }

  return (
    <div className={style.interests}>
      <main>
        <div className={style.logo}>
          <img src="./img/logo/logo.png" alt="logo"></img>
        </div>
        <h1>Выберите интересы</h1>
        <h3>Это поможет более точно подбирать рекомендации для вас</h3>
        <div className={style.container}>
          {arr.map((el, index) => (
            <div className={style.plitka}>
              <div className={style.icon}>
                <img src={`./img/icon/icon${index + 1}b.svg`} alt="icon" />
              </div>
              <p>{el}</p>
            </div>
          ))}
          <div style={{ marginTop: "80px" }} className={style.button}>
            <div className={style.button_inner}>Продолжить</div>
          </div>
          <div className={style.button}>
            <div
              style={{ backgroundColor: "#AEAEAE", marginTop: "10px" }}
              className={style.button_inner}
            >
              Пропустить
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Interests;
