import { createContext, useState } from 'react';
const UserContext = createContext({});

export function GlobalContextProvider({ children }) {
  const [vaccinationCode, setVaccinationCode] = useState(false);
  return (
    <UserContext.Provider
      value={{
        vaccinationCode,
        setVaccinationCode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;
