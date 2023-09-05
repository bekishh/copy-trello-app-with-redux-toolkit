import React from "react";
import Login from "./components/Login";
import Lists from "./components/Lists";
import { Route, Routes } from "react-router";

function App() {
  return (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/" element={<Login />} />
        </Routes>
  );
}

export default App;
