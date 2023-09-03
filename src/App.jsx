import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Lists  from "./components/Lists";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
