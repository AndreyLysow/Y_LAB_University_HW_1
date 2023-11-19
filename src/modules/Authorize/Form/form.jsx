import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import lock from "../../../assets/img/img-lock.svg";
import google from "../../../assets/img/logo-google.svg";
import facebook from "../../../assets/img/logo-facebook.svg";
import yandex from "../../../assets/img/logo-yandex.svg";
import "./form.css";
import store from "../../../store/store";
import { observer } from "mobx-react-lite";
import Runing from "../../RunAnimaton/runing";

const Form = observer(() => {
  const navigate = useNavigate();
  const [isLoadingAnimation, setLoadingAnimation] = useState(false);

  useEffect(() => {
    if (store.token) {
      navigate("/");
    }
  }, [store.token, navigate]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      login: "lysow@yandex.ru",
      password: "DTdEwAn",
    },
  });

  const onSubmit = async (data) => {
    store.setLogin(data.login);
    store.setPassword(data.password);
    setLoadingAnimation(true); // Показываем анимацию загрузки
    // Может потребоваться добавить логику задержки здесь
    store.getToken();
    await new Promise(resolve => setTimeout(resolve, 1000)); // Пример задержки в 1 секунду
    setLoadingAnimation(false); // Скрываем анимацию загрузки
    reset();
    if (isValidEmail(data.login)) {
      console.log("Navigating to welcome page");
      navigate("/welcome");
    } else {
      console.log("Invalid email format");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitButtonContent = isLoadingAnimation ? <Runing /> : "Войти";

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <img className="form-img__lock" src={lock} alt="" />
      <div className="form-links">
        <button className="form-link">
          <Link to="/auth">Войти</Link>
        </button>
        <button className="form-link form-link__disabled">
          <Link to="/error">Зарегистрироваться</Link>
        </button>
      </div>
      <label className="form-label">
        {store.isAuthError ? "Неправильный e-mail" : "E-mail:"}
        <input
          {...register("login", {
            required: true,
            validate: isValidEmail,
          })}
          className={errors?.login ? "form-input form-input__invalid" : "form-input"}
          type="text"
        />
        {errors?.login && <p className="error-message">Введите корректные данные</p>}
      </label>
      <label className="form-label">
        {store.isAuthError ? "Неправильный пароль" : "Пароль:"}
        <input
          {...register("password", {
            required: true,
          })}
          className={errors?.password ? "form-input form-input__invalid" : "form-input"}
          type="password"
          autoComplete="on"
        />
        {errors?.password && <p className="error-message">Введите корректные данные</p>}
      </label>
      <button disabled={!isValid} className="form-button__submit" type="submit">
        {submitButtonContent}
      </button>
      <Link className="repare-password" to="/error">
        Восстановить пароль
      </Link>
      <p className="sign-with">Войти через:</p>
      <div className="sign-socials">
        <Link to="https://google.com" target="_blank">
          <img src={google} alt="Google" />
        </Link>
        <Link to="https://facebook.com" target="_blank">
          <img src={facebook} alt="Facebook" />
        </Link>
        <Link to="https://yandex.ru" target="_blank">
          <img src={yandex} alt="Yandex" />
        </Link>
      </div>
    </form>
  );
});

export default Form;



