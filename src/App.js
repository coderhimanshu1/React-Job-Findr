import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import JoblyApi from "./helper/api";

import useLocalStorage from "./hooks/useLocalStorage";

import Home from "./routes/home";
import Login from "./routes/auth/login";
import Register from "./routes/auth/register";
import Jobs from "./routes/jobs/jobs";
import Companies from "./routes/companies/companies";
import Company from "./routes/companies/company";
import NavBar from "./routes/common/nav";
import UserContext from "./routes/common/userContext";
import jwt from "jsonwebtoken";
import Profile from "./routes/profile";

// Key name for storing token
export const TOKEN_STORAGE = "jobly-token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

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

  /*
  Handles user login
  */

  const handleLogin = async (loginData) => {
    try {
      let token = await JoblyApi.loginUser(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  };

  /** Handles register.
   * Automatically logs them in (set token) upon signup.
   *
   */
  const register = async (signupData) => {
    try {
      let token = await JoblyApi.signupUser(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("Register failed", errors);
      return { success: false, errors };
    }
  };

  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  /** Apply to a job: make API call and update set of application IDs. */
  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  return (
    <div className="App">
      <Router>
        <UserContext.Provider
          value={{
            currentUser,
            setCurrentUser,
            setToken,
            hasAppliedToJob,
            applyToJob,
          }}
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home currentUser={currentUser} />} />
            <Route path="/login" element={<Login login={handleLogin} />} />
            <Route
              path="/register"
              element={<Register register={register} />}
            />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:companyHandle" element={<Company />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
