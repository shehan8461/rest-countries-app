import { createContext, useContext, useState, useEffect } from 'react';
import React from 'react';
const AuthContext = createContext();




export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means no user logged in

  const login = (username, password) => {
    // Fake login logic
    if (username === "admin" && password === "1234") {
      setUser({ username });
      return true;
    }
    if (username === "shehan" && password === "shehan1234") {
        setUser({ username });
        return true;
      }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = () => useContext(AuthContext);
