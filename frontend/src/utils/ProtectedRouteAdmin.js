import { Route, Redirect } from 'react-router-dom';
const ProtectedRouteAdmin = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return loggedIn === 'secretaria' ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                prevLocation: path,
                error: 'Erro de Autenticação de Usuário! (Secretário de Saúde)',
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRouteAdmin;
