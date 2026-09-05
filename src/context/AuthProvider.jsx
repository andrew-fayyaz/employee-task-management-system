import { useState } from "react";
import { getLocalStorage } from "../utils/localStorage";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => getLocalStorage());

  const updateEmployees = (employees) => {
    setUserData((prev) => ({
      ...prev,
      employees,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...userData, updateEmployees }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
