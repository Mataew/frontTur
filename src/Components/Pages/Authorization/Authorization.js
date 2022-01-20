import React, { useState } from "react";
import "./Authorization.css";

// Страница авторизации
const Authorization = () => {
  const [Switch, setSwitch] = useState("form-box");
  const [bodyClass, setBodyClass] = useState("body");

  const Active = () => {
    setSwitch("form-box active");
    setBodyClass("body active");
  };

  const notActive = () => {
    setSwitch("form-box");
    setBodyClass("body");
  };

  return (
    <div className={bodyClass}>
      <acticle className="container">
        <div className="block">
          <section className="block__item block-item">
            <h2 className="block-item__title">У вас уже есть аккаунт?</h2>
            <button className="block-item__btn signin-btn" onClick={notActive}>
              Войти
            </button>
          </section>
          <section className="block__item block-item">
            <h2 className="block-item__title">У вас нет аккаунта?</h2>
            <button className="block-item__btn signup-btn" onClick={Active}>
              Зарегистрироваться
            </button>
          </section>
        </div>
        <div className={Switch}>
          <form action="#" className="form form_signin">
            <h3 className="form__title">Вход</h3>
            <p>
              <input
                className="form__input"
                placeholder="Email"
                type="email"
              ></input>
            </p>
            <p>
              <input
                className="form__input"
                placeholder="Password"
                type="password"
              ></input>
            </p>
            <p>
              <button className="form__btn">Войти</button>
            </p>
          </form>

          <form action="#" className="form form_signup">
            <h3 className="form__title">Регистрация</h3>
            <p>
              <input
                className="form__input"
                placeholder="Email"
                type="email"
              ></input>
            </p>
            <p>
              <input
                className="form__input"
                placeholder="Password"
                type="password"
              ></input>
            </p>
            <p>
              <button className="form__btn form__btn_signup">
                Зарегистрироваться
              </button>
            </p>
          </form>
        </div>
      </acticle>
    </div>
  );
};

export default Authorization;
