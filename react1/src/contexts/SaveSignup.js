import { createContext, useState, useEffect } from "react";

export const SignupContext = createContext();

const loadFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const SignupContextProvider = ({ children }) => {
  const [signup, setSignup] = useState(loadFromLocalStorage("signup") || []);

  useEffect(() => {
    localStorage.setItem("signup", JSON.stringify(signup));
  }, [signup]);

  return (
    <SignupContext.Provider value={{ signup, setSignup }}>
      {children}
    </SignupContext.Provider>
  );
};