import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "./modules/PageNotFound/error404";
import Authorize from "./modules/Authorize/auth";
import Welcome from "./modules/welcome/welcome"; // Импортируйте компонент для страницы велкам

const routesData = [
  { path: "/", element: <Authorize onLoginSuccess={() => <Navigate to="/welcome" />} /> },
  { path: "/error", element: <Error /> },
  { path: "/welcome", element: <Welcome /> }, // Добавьте маршрут для страницы велкам
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            {routesData.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;



