import { Route, Redirect } from 'react-router-dom';

const ProtectedRouteUnit = ({ component: Comp, path, ...rest }) => {
  const isLoggedInType = localStorage.getItem('loginType');
  console.log(isLoggedInType);
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return isLoggedInType === 'POSTO_VACINACAO' ? (
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
