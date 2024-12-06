import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Task1 from "./components/Task1/Task1";
import Task2 from "./components/Task2/Task2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Task1" element={<Task1 />} />
        <Route path="/Task2" element={<Task2 />} />
      </Routes>
    </Router>
  );
}

export default App;
