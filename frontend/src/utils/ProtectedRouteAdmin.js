import { Route, Redirect } from 'react-router-dom';
const ProtectedRouteAdmin = ({ component: Comp, path, ...rest }) => {
  const isLoggedInType = localStorage.getItem('loginType');
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return isLoggedInType === 'SECRETARIA' ? (
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
