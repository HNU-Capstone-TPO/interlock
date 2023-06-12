import { createContext, useState, useEffect } from "react";

export const SingupContext = createContext();

const loadFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const SingupContextProvider = ({ children }) => {
  const [singup, setSingup] = useState(loadFromLocalStorage("singup") || []);

  useEffect(() => {
    localStorage.setItem("singup", JSON.stringify(singup));
  }, [singup]);

  return (
    <SingupContext.Provider value={{ singup, setSingup }}>
      {children}
    </SingupContext.Provider>
  );
};