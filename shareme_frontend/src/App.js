import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./container";
import { Login } from "./components";
import { getUserInfo } from "./utils/data";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = getUserInfo();

    if (!user) navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
