import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <h2 className="welcome__title">Добро пожаловать!</h2>
      <p>
        Для возвращения на стартовую страницу, кликните <Link to="/">здесь</Link>.
      </p>
    </div>
  );
};

export default Welcome;
