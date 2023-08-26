import React, { useState } from "react";
import style from "./Constructor.module.scss";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputRangeSmooth from "../../component/PriceRangeSlider";
import { Link } from "react-router-dom";

function Constructor() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isParam, setIsParam] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  //   const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });
  //   const [isDragging, setIsDragging] = useState(false);
  const [rangeValues, setRangeValues] = useState({
    min: 0,
    max: 1000000,
  });

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
  const mass2 = ["По популярности", "По цене(min)", "По цене(max)"];
  const funLiActive = (el) => {
    arr.push(el);
    arr.map((arr) => setliActive((el) => [...el, arr]));

    console.log(arr);
  };

  const Param = (props) => {
    return (
      <>
        <div className={style.param}></div>

        <div className={style.param_inner}>
          <div className={style.line}>
            <img
              onClick={() => setIsParam(false)}
              src="./img/icon/arrow.svg"
              alt="lll"
            ></img>
          </div>

          <div className={style.p}>Параметры</div>
          <div className={style.container}>
            <p>Город</p>
            <input placeholder="Дубаи"></input>

            <p>Дата</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "115px" }}>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd.MM"
                  placeholderText="От"
                />
              </div>
              <div style={{ width: "115px" }}>
                <DatePicker
                  selected={selectedDate2}
                  onChange={handleDateChange2}
                  dateFormat="dd.MM"
                  placeholderText="До"
                  style={{ width: "115px" }}
                />
              </div>
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
            <InputRangeSmooth
              setRangeValues={setRangeValues}
              minValue={rangeValues.min}
              maxValue={rangeValues.max}
              values={rangeValues}
            />
          </div>
          <div style={{ marginTop: "10px" }} className={style.button}>
            <div
              onClick={() => setIsParam(false)}
              className={style.button_inner}
            >
              Применить
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

  const Place = (props) => {
    return (
      <div className={style.place}>
        <img src={props.imgurl} alt="sss"></img>
        <div className={style.place_inner}>{props.name}</div>
      </div>
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
        <div className={style.menu_inner}></div>
        <div className={style.menu_inner}>
          <img
            onClick={() => setIsFilter(!isFilter)}
            width={25}
            style={{ margin: " 0px 20px 0px 25px " }}
            src="./img/icon/constr4.svg"
            alt="logo"
          ></img>
          <img
            onClick={() => setIsParam(true)}
            width={25}
            src="./img/icon/param.svg"
            alt="logo"
          ></img>
        </div>
      </div>
      {isFilter && (
        <div className={style.filter}>
          <ul>
            {mass2.map((el) =>
              liActive.includes(el) ? (
                <Item text={el} active={true} />
              ) : (
                <Item text={el} active={false} />
              )
            )}
          </ul>
        </div>
      )}
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

      {isParam && <Param setIsParam={setIsParam} isParam={isParam} />}

      <div className={style.place_container}>
        <Place imgurl="./img/icon/mon1.png" name={"Первопоселенец"} />
        <Place imgurl="./img/icon/mon2.png" name={"Будда"} />
        <Place imgurl="./img/icon/mon3.png" name={"Будда Шакьямуни"} />
        <Place imgurl="./img/icon/mon4.png" name={"Андреа Верроккьо"} />
        <Place imgurl="./img/icon/mon5.png" name={"Памятник «Рабство»"} />
        <Place imgurl="./img/icon/mon6.png" name={"Святая Виктория"} />

        <div style={{ marginTop: "20px" }} className={style.button}>
          <Link to="./../MapConstructor">
            <div className={style.button_inner}>Построить</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Constructor;
