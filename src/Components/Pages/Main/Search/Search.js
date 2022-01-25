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
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const turs = useSelector((state) => state.turReducer.turs);

  const [from, setFrom] = useState("");

  const [to, setTo] = useState("");

  const [data, setData] = useState("");

  const [night, setNight] = useState("");

  const [people, setPeople] = useState("");

  const [inputTurs, setinputTurs] = useState();

  const [err, setErr] = useState("");
  

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
    setinputTurs(filtur ? filtur : "");
    setErr(filtur.length !== 0 ? "" : <div className={styles.empty}><h1>Ничего не найдено</h1></div>)
  };

  const GetByTurs = (id) => {
    dispatch(GetByTur(id));
  };

  const filteredTurs = !inputTurs ? turs : inputTurs;
  
  const e = err

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
      <div className={styles.Search_main_Block}>
        {/* <div data-aos="input-animation" className={styles.search_title}>
      <div className={styles.titles}><span className={styles.search_titleTwo}>Откуда</span><span className={styles.search_titleThree}>Куда</span></div>
      </div> */}
        <div data-aos="input-animation" className={styles.search_input}>
          <div data-aos="input-animation" className={styles.search_m}>
            {/* <span className={styles.search_titleTwo}>Откуда</span> */}
            <div className={styles.titles}>
              <h3 className={styles.search_titleTwo}>Откуда</h3>
              <h3 className={styles.search_titleThree}>Куда</h3>
              <h3 className={styles.search_titleFour}>Дата вылета</h3>
              <h3 className={styles.search_titleFive}>Ночей</h3>
              <h3 className={styles.search_titleSix}>Человек</h3>
            </div>
            <div data-aos="input-animation" className={styles.search_inp}>
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
          </div>
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
          if (item.hotel.rating === 5) {
            star = "⭐⭐⭐⭐⭐";
          }
          if (item.hotel.rating === 4) {
            star = "⭐⭐⭐⭐";
          }
          if (item.hotel.rating === 3) {
            star = "⭐⭐⭐";
          }
          if (item.hotel.rating === 2) {
            star = "⭐⭐";
          }
          if (item.hotel.rating === 1) {
            star = "⭐";
          }
          return (
            <div data-aos="img-animation" className={styles.search_imgBlock}>
              <div className={styles.tours_cards_wrapper}>
                <img
                  className={styles.tur_img}
                  src={`http://localhost:7000/${item.img}`}
                  alt="daun"
                />
              </div>
              <div className={styles.absolute_display}>
                <h3 className={styles.tours_cards_title}>
                  <Link
                    to="/Hotels"
                    className={styles.tur_buy}
                    onClick={() => GetByTurs(item._id)}
                  >
                    {item.to}
                  </Link>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      {e}
    </div>
  );
};

export default Search;
