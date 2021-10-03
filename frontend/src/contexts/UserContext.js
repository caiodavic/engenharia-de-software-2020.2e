import { createContext, useState } from 'react';
const UserContext = createContext({});

export function GlobalContextProvider({ children }) {
  const [vaccinationCode, setVaccinationCode] = useState(false);
  const [vaccinationPosition, setVaccinationPosition] = useState(-1);
  const [postoId, setPostoId] = useState(-1);

  return (
    <UserContext.Provider
      value={{
        vaccinationCode,
        setVaccinationCode,
        vaccinationPosition,
        setVaccinationPosition,
        postoId,
        setPostoId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;
