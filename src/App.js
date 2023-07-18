// import logo from "./logo.svg";
import Home from "./routes/home";
import Login from "./routes/login";
import Register from "./routes/register";
import Jobs from "./routes/jobs";
import Companies from "./routes/companies";
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companies" element={<Companies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
