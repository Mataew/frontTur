import React from "react";
import styles from "./search.module.css";
import fon from "../../../../assets/search_fon.png";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "./search.css";
import "aos/dist/aos.css";
import { GetTurs } from "../../../../redux/features/searchReducer";
import { GetByTur } from "../../../../redux/features/turDesk";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const turs = useSelector((state) => state.turReducer.turs);

  const [from, setFrom] = useState("");

  const [to, setTo] = useState("");

  const [data, setData] = useState("");

  const [night, setNight] = useState("");

  const [people, setPeople] = useState("");

  const [inputTurs, setinputTurs] = useState();
  // tur.data.split("").reverse().join("").includes(data) 

  const search = () => {
    const filtur = turs.filter((tur) => {
      return (
        tur.from.toLowerCase().includes(from.toLowerCase()) &&
        tur.to.toLowerCase().includes(to.toLowerCase()) &&
        String(tur.night).includes(night) &&
        tur.data.toLowerCase().includes(data.toLowerCase()) &&
        String(tur.amount).includes(people)
      );
    });
    console.log(filtur);
    setinputTurs(filtur);
  };
  
  const GetByTurs = (id) => {
    dispatch(GetByTur(id))
  }

  const filteredTurs = !inputTurs ? turs : inputTurs;

  console.log(setinputTurs);

  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({ duration: 200 });
    dispatch(GetTurs());
  }, [dispatch]);
  let star = "";
  return (
    <div
      className={styles.search_main}
      style={{ backgroundImage: `url("${fon}")` }}
    >
      {/* <div data-aos="input-animation" className={styles.search_title}> */}

      {/* </div> */}
      <div className={styles.Search_main_Block}>
        <div data-aos="input-animation" className={styles.search_input}>
          {/* <span className={styles.search_titleTwo}>Откуда</span> */}
          <input
          className={styles.search_inputTwo}
            type="text"
            list="fromCities"
            placeholder="Из какого города..."
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <datalist id="fromCities">
            <option value="Грозный" />
            <option value="Москва" />
          </datalist>

          {/* <span className={styles.search_titleThree}>Куда</span> */}
          <input
          className={styles.search_inputThree}
            type="text"
            list="toCities"
            placeholder="В какой город..."
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <datalist id="toCities">
            <option value="Анталья" />
            <option value="Хургада" />
            <option value="Самуи" />
          </datalist>
          {/* <span className={styles.search_titleFour}>Дата вылета</span> */}
          <input
          className={styles.search_inputFour}
          list="data"
            // type="date"
            placeholder="Дата"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <datalist id="data">
            <option value="26.09.2022" />
            <option value="18.06.2022" />
            <option value="07.07.2022" />
          </datalist>

          {/* <span className={styles.search_titleFive}>Ночей</span> */}
          <input
          className={styles.search_inputFive}
            type="number"
            placeholder="КОЛ-ВО"
            value={night}
            onChange={(e) => setNight(e.target.value)}
          />

          {/* <span className={styles.search_titleSix}>Человек</span> */}
          <input
          className={styles.search_inputSix}
            type="number"
            placeholder="КОЛ-ВО"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
        <div className={styles.Search_btn_block}>
          <button
            className={styles.search_btn}
            onClick={search}
            disabled={!from && !to && !data && !night && !people}
          >
           <h1> Поиск</h1>
          </button>
        </div>
      </div>
      <div className={styles.tur_name}>
        {filteredTurs.map((item, index) => {
             if(item.hotel.rating === 5) {
               star = "⭐⭐⭐⭐⭐"
             }
             if(item.hotel.rating === 4) {
              star = "⭐⭐⭐⭐"
             }
             if(item.hotel.rating === 3) {
              star = "⭐⭐⭐"
             }
             if(item.hotel.rating === 2) {
              star = "⭐⭐"
             }
             if(item.hotel.rating === 1) {
              star = "⭐"
             }
          return (
            <div data-aos="img-animation" className={styles.search_imgBlock}>
              <div className={styles.wrapper_tur_img}>
                <img
                  data-aos="img-animation"
                  className={styles.tur_img}
                  src={`http://localhost:7000/${item.img}`}
                  alt=""
                />
              </div>
              <h4>{item.hotel.name}</h4>
              <h4>Рейтинг {star}</h4>
              <h5 className={styles.tur_to}>{item.to}</h5>
              <h5 className={styles.tur_to}>
                {item.data}, {item.night} ночей
              </h5>
              <h5 className={styles.tur_to}>Вылет: {item.from}</h5>
              <h5 className={styles.tur_to}>Человек: {item.amount}</h5>
              <button className={styles.tur_buy} onClick={() => GetByTurs(item._id)}>Подробнее</button>
              <h2 className={styles.tur_price}>{item.price} руб</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
