import React, { useEffect } from "react";
import style from "./Constructor.module.scss";
function Constructor() {
  const [menuActive, setMenuActive] = React.useState(false);
  const [liActive, setliActive] = React.useState([]);

  const arr = [];
  const mass = [
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

  const funLiActive = (el) => {
    // el.target.style.backgroundColor === "blue"
    //   ? (el.target.style.backgroundColor = "#fff")
    //   : (el.target.style.backgroundColor = "blue");
    arr.push(el);
    arr.map((arr) => setliActive((el) => [...el, arr]));

    console.log(arr);
  };

  const Param = () => {
    return (
      <>
        <div className={style.param}></div>
        <div className={style.param_inner}>
          <div className={style.p}>Параметры</div>
          <div className={style.container}>
            <p>Город</p>
            <input placeholder="Дубаи"></input>

            <p>Дата</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input type="date" style={{ width: "115px" }}></input>
              <input type="date" style={{ width: "115px" }}></input>
            </div>
            <p>Туристы</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                type="number"
                placeholder="Взрослые"
                style={{
                  padding: "7px 0",
                  width: "115px",
                  textAlign: "center",
                  fontSize: "18px",
                }}
              ></input>
              <input
                type="number"
                placeholder="Дети"
                style={{
                  width: "115px",
                  textAlign: "center",
                  padding: "7px 0",
                }}
              ></input>
            </div>

            <p>Бюджет</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                type="number"
                placeholder="От"
                value={0}
                style={{
                  width: "115px",
                  textAlign: "center",
                  padding: "7px 0",
                }}
              ></input>
              <input
                type="number"
                placeholder="До"
                value={1000000}
                style={{
                  width: "115px",
                  textAlign: "center",
                  padding: "7px 0",
                }}
              ></input>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Item = (props) => {
    return props.active ? (
      <li>
        {" "}
        <div
          onClick={(el) => {
            funLiActive(props.text);
          }}
          className={style.li_active}
          style={{ backgroundColor: "blue" }}
        ></div>
        {props.text}
      </li>
    ) : (
      <li>
        {" "}
        <div
          onClick={(el) => {
            funLiActive(props.text);
          }}
          className={style.li_active}
          style={{ backgroundColor: "#fff" }}
        ></div>
        {props.text}
      </li>
    );
  };

  return (
    <div className={style.constructor}>
      <div className={style.logo}>
        <img src="./img/logo/logo.png" alt="logo"></img>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <img src="./img/icon/constr1.png" alt="logo"></img>
      </div>
      <div className={style.menu}>
        <div className={style.menu_inner}>
          <div
            className={style.menu_inner_inner}
            onClick={() => setMenuActive(!menuActive)}
          >
            Тематика
            <img
              className={menuActive && style.active}
              height={8}
              style={{
                margin: " 10px 1px 1px 10px ",
              }}
              src="./img/icon/constr2.svg"
              alt="logo"
            ></img>
          </div>
        </div>
        <div className={style.menu_inner}>
          {/* <div className={style.menu_inner_inner}>
            Таганрог
            <img
              style={{ margin: " 6px 1px 1px 10px " }}
              src="./img/icon/constr3.svg"
              alt="logo"
            ></img>
          </div> */}
        </div>
        <div className={style.menu_inner}>
          <img
            width={25}
            style={{ margin: " 0px 20px 0px 25px " }}
            src="./img/icon/constr4.svg"
            alt="logo"
          ></img>
          <img width={25} src="./img/icon/param.svg" alt="logo"></img>
        </div>
      </div>
      {menuActive && (
        <div className={style.covert}>
          <ul>
            {mass.map((el) =>
              liActive.includes(el) ? (
                <Item text={el} active={true} />
              ) : (
                <Item text={el} active={false} />
              )
            )}
            {/* <Item text={"Развлечения"} active={true} />
            <Item text={"Культура"} active={false} />
            <Item text={"Природа"} active={true} />
            <Item text={"Пляжи"} active={true} /> */}
          </ul>

          <div className={style.bottom}>
            <div className={style.bottom_inner}>Очистить</div>
            <div className={style.bottom_inner}>
              <div
                className={style.bottom_inner_inner}
                onClick={() => setMenuActive(!menuActive)}
              >
                Применить
              </div>
            </div>
          </div>
        </div>
      )}

      <Param />
    </div>
  );
}

export default Constructor;
