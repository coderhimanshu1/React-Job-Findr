// import logo from "./logo.svg";
import Home from "./routes/home";
import Login from "./routes/login";
import NavBar from "./routes/nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
