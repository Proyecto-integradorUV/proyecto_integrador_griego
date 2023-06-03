import React, { createContext, useState, useLayoutEffect } from "react";

export const SignInContext  = createContext();

export function LoginWrapper({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  useLayoutEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setIsLogged(true);
    }
  }, []);

  return (
    <SignInContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </SignInContext.Provider>
  );
}