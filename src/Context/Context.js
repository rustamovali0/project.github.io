import { createContext } from "react";
import React from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");
  const [textColor, setTextColor] = React.useState("dark");

  const data = {
    textColor,
    theme,
    setTheme,
    setTextColor,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;