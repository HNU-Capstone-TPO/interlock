import { createContext, useState, useEffect } from "react";

export const SaveidContext = createContext();

const loadFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const SaveidContextProvider = ({ children }) => {
  const [saveid, setSaveid] = useState(loadFromLocalStorage("saveid") || []);

  useEffect(() => {
    localStorage.setItem("saveid", JSON.stringify(saveid));
  }, [saveid]);

  return (
    <SaveidContext.Provider value={{ saveid, setSaveid }}>
      {children}
    </SaveidContext.Provider>
  );
};