import React, { useEffect, useState } from "react";
import "./authUser.css";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import avatar from "../../../assets/img/avatar.svg";
import Runing from "../../RunAnimaton/runing";
import { Link } from "react-router-dom";

const AuthUser = observer(() => {
  const [login, setLogin] = useState(localStorage.getItem("login") || "Гость");

  useEffect(() => {
    // Заглушка для isCompaniesLoading и getCompaniesInfo
    const fetchData = async () => {
      // Имитация задержки, как если бы мы делали запрос к серверу
      await new Promise(resolve => setTimeout(resolve, 1000));

     
    };

    fetchData();
  }, []);

  useEffect(() => {
    // При монтировании компонента, устанавливаем значение из localStorage в состояние
    const storedLogin = localStorage.getItem("login");
    if (storedLogin) {
      setLogin(storedLogin);
    }
  }, []);

  return (
    <div className="authUser">
      <div className="user-info">
        <span className="username">{login}</span>
        <button
          className="logout"
          onClick={() => {
            store.setToken("");
            localStorage.clear();
            setLogin("Гость"); // Сбрасываем состояние login на "Гость"
          }}
        >
          <Link className="header-nav__link" to="/">
            Выйти
          </Link>
        </button>
      </div>
  
    </div>
  );
});

export default AuthUser;
