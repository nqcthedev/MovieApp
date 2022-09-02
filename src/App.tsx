import "./App.css";

import { Route, Routes } from "react-router-dom";

import DefaultLayout from "@/component/Layout";
import React from "react";
import { route } from "./route";

function App() {
  return (
    <div className="App">
      <Routes>
        {route.map((movie, index) => {
          const Page = movie.element;
          const Layout = DefaultLayout;
          return (
            <Route
              key={index}
              path={movie.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App
