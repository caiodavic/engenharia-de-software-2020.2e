import { Route, Redirect } from 'react-router-dom';

const ProtectedRouteUnit = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return loggedIn === 'posto' ? (
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
