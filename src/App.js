// import logo from "./logo.svg";
import Home from "./routes/home";
import Login from "./routes/login";
import Register from "./routes/register";
import Job from "./routes/job";
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
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/jobs" element={<Job />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
