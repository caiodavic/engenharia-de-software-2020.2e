import { createContext, useState } from 'react';
const UserContext = createContext({});

export function GlobalContextProvider({ children }) {
  const [token, setToken] = useState(false);
  const [isLoggedInType, setIsLoggedInType] = useState(false);
  const [vaccinationCode, setVaccinationCode] = useState(false);
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        isLoggedInType,
        setIsLoggedInType,
        vaccinationCode,
        setVaccinationCode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;
