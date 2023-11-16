import "./App.css"
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Error = React.lazy(() => import("./modules/PageNotFound/error404"));
const Authorize = React.lazy(() => import("./modules/Authorize/auth"));


const routesData = [
  { path: "/error", element: <Error /> },
  { path: "/auth", element: <Authorize /> },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <main>
            <Routes>
              {routesData.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </main>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
