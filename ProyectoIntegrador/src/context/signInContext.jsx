import React from 'react';
import { useState, useLayoutEffect } from "react";

export const LoginContext = React.createContext();

export function LoginWrapper({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  useLayoutEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setIsLogged(true);
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
}