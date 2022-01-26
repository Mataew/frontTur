import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authUser, createUser } from "../../../redux/reducerAuthorization";

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

  const dispatch = useDispatch()

  const check = useSelector(state => state.authorizatonReducer.check)
  const signingUp = useSelector(state => state.authorizatonReducer.signingUp)
  const err = useSelector(state => state.authorizatonReducer.error)
  console.log(err);
  const signingIn = useSelector(state => state.authorizatonReducer.signingIn)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [authLogin, setAuthLogin] = useState('')
  const [authPassword, setAuthPassword] = useState('')
  const [NotEmail, setNotEmail] = useState("");

  const handleAuthLogin = (e) => {
    setAuthLogin(e.target.value)
    const valid =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!valid.test(String(e.target.value).toLowerCase())) {
      setNotEmail("Некоректный емаил");
    } else {
      setNotEmail("");
    }
  }

  const handleAuthPassword = (e) => {
    setAuthPassword(e.target.value)
  }


  const handleChangeLogin = (e) => {
    setLogin(e.target.value)
    const valid =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!valid.test(String(e.target.value).toLowerCase())) {
      setNotEmail("Некоректный емаил");
    } else {
      setNotEmail("");
    }
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChengeFirstname = (e) => {
    setFirstname(e.target.value)
  }
  const handleChengeLastname = (e) => {
    setLastname(e.target.value)
  }

  
  const handleSubmitAuth = () => {
    dispatch(authUser(authLogin, authPassword))
  }

const handleSubmit = () => {
   dispatch(createUser(login, password, firstName, lastName))
   setLogin('')
   setPassword('')
   setFirstname('')
   setLastname('')
   if (check){
    setSwitch("form-box");
    setBodyClass("body");
   }
}


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
            {!NotEmail ? <h3 className="error">{err}</h3> : <h3 className="error">{NotEmail}</h3>}
              <input
                className="form__input"
                placeholder="login"
                value={authLogin}
                onChange={handleAuthLogin}
                type="text"
              ></input>
            </p>
            <p>
              <input
                className="form__input"
                placeholder="Password"
                value={authPassword}
                onChange={handleAuthPassword}
                type="password"
              ></input>
            </p>
            <p>
              <Link to='/'
              disabled={false}
              onClick={handleSubmitAuth}
              className="form__btn"> Войти</Link>
            </p>
          </form>

          <form action="#" className="form form_signup">
            <h3 className="form__title">Регистрация</h3>
            {!NotEmail ? <h3 className="error">{err}</h3> : <h3 className="error">{NotEmail}</h3>}
            <p>
              <input
                className="form__input"
                placeholder="Email"
                value={login}
                onChange={handleChangeLogin}
                type="email"
              ></input>
            </p>
            <p>
              <input
                className="form__input"
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
                type="password"
              ></input>
            </p>
            <p>
              <input
                className="form__input"
                placeholder="Firstname"
                value={firstName}
                onChange={handleChengeFirstname}
                type="text"
              ></input>
            </p>            <p>
              <input
                className="form__input"
                placeholder="Lastname"
                value={lastName}
                onChange={handleChengeLastname}
                type="text"
              ></input>
            </p>
            <p>
              <button
              disabled={signingUp}
              onClick={handleSubmit}
              className="form__btn form__btn_signup">
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
