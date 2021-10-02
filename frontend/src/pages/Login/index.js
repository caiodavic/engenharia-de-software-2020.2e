import { useState } from 'react';
import {
  PageWrapper,
  PageTitle,
  PageSubTitle,
  StyledForm,
} from '../../components/shared/CommonStyles';
import { LoginWrapper, LoginTypesContainer, LinkToSignUp } from './style';
import { useHistory, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import Loader from '../../components/Loader';
import { login } from '../../services/loginService';

// usando login tipo="posto" como posto de vacinacao de tipo="secretaria" como secretaria de saúde
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('posto');
  const [isLoading, setIsLoading] = useState(true);
  const { token, setToken, isLoggedInType, setIsLoggedInType } = useContext(
    UserContext
  );
  let history = useHistory();
  let location = useLocation();
  const { state = {} } = location;
  const { error } = state;

  useEffect(checkIfItsAlreadyLoggedIn, [token]);

  function checkIfItsAlreadyLoggedIn() {
    if (token) {
      if (isLoggedInType === 'secretaria') {
        history.push('/admin');
      } else if (isLoggedInType === 'posto') {
        history.push('/posto');
      }
    }
    setIsLoading(false);

    if (error) {
      alert(error);
    }
  }

  const checkCredentials = async (e) => {
    e.preventDefault();
    console.log(email, password, loginType);
    setIsLoading(true);
    const {
      data: { token },
    } = await login({
      login: email,
      senha: password,
      tipoLogin: loginType,
    });

    setToken(token);
    setIsLoggedInType(loginType);

    if (loginType === 'secretaria') {
      history.push('/admin');
    } else if (loginType === 'posto') {
      history.push('/posto');
    }

    console.log('LOGADO >> ', token);
  };

  return (
    <PageWrapper>
      <LoginWrapper>
        <PageTitle>Bem vindo!</PageTitle>
        <PageSubTitle>
          Realize seu Login como Posto de Vacinação ou Secretário(a) de Saúde
        </PageSubTitle>
        <StyledForm onSubmit={checkCredentials}>
          <label htmlFor="email">E-mail: </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <LoginTypesContainer>
            <div>
              <input
                type="radio"
                name="login-type"
                id="login-posto"
                value="posto"
                defaultChecked
                onChange={(e) => setLoginType(e.target.value)}
              ></input>
              <label htmlFor="login-posto-vacinacao">Posto de Vacinação </label>
            </div>

            <div>
              <input
                type="radio"
                name="login-type"
                id="login-secretaria"
                value="secretaria"
                checked={loginType === 'secretaria'}
                onChange={(e) => setLoginType(e.target.value)}
              ></input>
              <label htmlFor="login-secretaria">Secretaria de Saúde</label>
            </div>
          </LoginTypesContainer>

          <input type="submit" disabled={isLoading} value="Login" />
        </StyledForm>
      </LoginWrapper>
    </PageWrapper>
  );
}
