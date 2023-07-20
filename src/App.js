import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import JoblyApi from "./helper/api";

import Home from "./routes/home";
import Login from "./routes/auth/login";
import Register from "./routes/register";
import Jobs from "./routes/jobs";
import Companies from "./routes/companies";
import Company from "./routes/company";
import NavBar from "./routes/nav";
import UserContext from "./routes/userContext";
import jwt from "jsonwebtoken";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  // Load user information
  useEffect(() => {
    const getUser = async () => {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          let currentUser = await JoblyApi.getProfile(username);
          setCurrentUser(currentUser);
        } catch (err) {
          setCurrentUser(null);
        }
      }
      setToken(JoblyApi.token);
    };
    getUser();
  }, [token]);

  const logout = () => {
    JoblyApi.token = null;
    setCurrentUser(null);
    setToken(null);
  };

  const handleLogin = async (loginData) => {
    let token = await JoblyApi.loginUser(loginData);
    setToken(token);
    return { success: true };
  };

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <NavBar logout={logout} />
          <Routes>
            <Route path="/" element={<Home currentUser={currentUser} />} />
            <Route path="/login" element={<Login login={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:companyHandle" element={<Company />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
