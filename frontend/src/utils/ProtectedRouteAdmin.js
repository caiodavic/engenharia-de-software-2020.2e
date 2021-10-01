import { Route, Redirect } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
const ProtectedRouteAdmin = ({ component: Comp, path, ...rest }) => {
  const { isLoggedInType } = useContext(UserContext);
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return isLoggedInType === 'secretaria' ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                prevLocation: path,
                error: `Erro de Autenticação de Usuário! (Secretário de Saúde)`,
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRouteAdmin;
