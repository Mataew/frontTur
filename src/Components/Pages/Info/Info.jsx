import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetTurs } from "../../../redux/features/searchReducer";
import styles from "./info.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";


// Страница "Полезная информация"
const Info = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTurs());
  }, [dispatch]);

  const tours = useSelector((state) => state.turReducer.turs);

  const rating = tours.filter((item) => {
    if (item.hotel.rating >= 4) {
      return item;
    }
  });


  return (
    <div className={styles.tours_main}>
      <h1 className={styles.tours_best_offers}>Топовые предложения от топового Хусейна</h1>
      <div className={styles.tours_wrapper}>
        {rating.map((item) => {
           
          return (
            <div className={styles.tours_cards_wrapper}>
              <img src={`http://localhost:7000/${item.img}`} alt="daun" />
              <h3 className={styles.tours_cards_title}>{item.to}</h3>
              <div className={styles.hover_display}>
                <div>ОТКУДА: {item.from}</div>
                <div>КУДА: {item.to}</div>
                <div>ЦЕНА: {item.price}</div>
                {item.hotel.rating === 4 ? '⭐⭐⭐⭐' : '⭐⭐⭐⭐⭐'}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.tours_map_img}>
        <h1>Отдых в любой точке мира</h1>
        <YMaps>
          <div>
            <Map
              width={"100%"}
              height={"300px"}
              defaultState={{ center: [43.301412, 45.642478], zoom: 2.1 }}>
               <Placemark geometry={[43.318369, 45.692419]} />
               <Placemark geometry={[55.755819, 37.617644]} />
            </Map>
          </div>
        </YMaps>
      </div>
    </div>
  );
};

export default Info;
