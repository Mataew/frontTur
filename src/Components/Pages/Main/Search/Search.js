import React from "react";
import styles from "./search.module.css";
import fon from "../../../../assets/search_fon.png";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "./search.css";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  // const turs = useSelector((state) => state.initialStateTur.turs)
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);
  return (
    <div
      className={styles.search_main}
      style={{ backgroundImage: `url("${fon}")` }}
    >
      <div data-aos="input-animation" className={styles.search_title}>
        <h2 className={styles.search_titleTwo}>Откуда</h2>
        <h2 className={styles.search_titleThree}>Куда</h2>
        <h2 className={styles.search_titleFour}>Дата вылета</h2>
        <h2 className={styles.search_titleFive}>Ночей</h2>
        <h2 className={styles.search_titleSix}>Человек</h2>
      </div>
      <div data-aos="input-animation" className={styles.search_input}>
        <input type="text" placeholder="Из какого города..." />

        <input type="text" placeholder="В какой город..." />

        <input type="text" placeholder="Дата" />

        <input type="text" placeholder="кол-во" />

        <input type="text" placeholder="Кол-во" />

        <button className={styles.search_btn}>Поиск</button>
      </div>
      <div>
        {/* {turs.map((item, index) => {
          return (
            <div>{item.front}</div>
          )
        })} */}
      </div>
    </div>
  );
};

export default Search;
