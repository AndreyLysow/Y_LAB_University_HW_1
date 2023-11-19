import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import key from "../../assets/img/picking-up-key.svg";
import "./auth.css";
import Form from "./Form/form";

const Authorize = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Ваша логика аутентификации
    setAuthenticated(true);

    // Переход на страницу приветствия
    navigate("/welcome");
  };

  return (
    <div className="authorize">
      <h2 className="auth__title">
        {isAuthenticated ? "Добро пожаловать!" : "Необходимо авторизоваться"}
      </h2>
      {isAuthenticated ? (
        <div>
          {/* Дополнительный контент после успешной авторизации */}
        </div>
      ) : (
        <div>
          <img className="auth-img" src={key} alt="key" />
          <Form onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default Authorize;
