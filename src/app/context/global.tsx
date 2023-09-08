"use client";

import { createContext, useContext } from "react";
const defaultState: unknown = null;

const GlobalContext = createContext(defaultState);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <GlobalContext.Provider value={"Hello World"}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
