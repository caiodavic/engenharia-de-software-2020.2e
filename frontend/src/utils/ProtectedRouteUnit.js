import { Route, Redirect } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';

const ProtectedRouteUnit = ({ component: Comp, path, ...rest }) => {
  const { isLoggedInType } = useContext(UserContext);
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return isLoggedInType === 'posto' ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                prevLocation: path,
                error: 'Erro de Autenticação de Usuário! (Posto de Vacinação)',
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRouteUnit;
