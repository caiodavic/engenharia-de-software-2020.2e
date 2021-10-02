import { useState } from 'react';
import {
  PageWrapper,
  PageTitle,
  PageSubTitle,
  StyledForm,
} from '../../components/shared/CommonStyles';
import { LoginWrapper, LoginTypesContainer } from './style';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { login } from '../../services/loginService';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('POSTO_VACINACAO');
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();
  let location = useLocation();
  const { state = {} } = location;
  const { error } = state;
  const localToken = localStorage.getItem('token');
  const isLoggedInType = localStorage.getItem('loginType');

  useEffect(checkIfItsAlreadyLoggedIn, [localToken]);

  function checkIfItsAlreadyLoggedIn() {
    if (localToken) {
      if (isLoggedInType === 'SECRETARIA') {
        history.push('/admin');
      } else if (isLoggedInType === 'POSTO_VACINACAO') {
        history.push('/posto');
      }
    }
    setIsLoading(false);

    if (error) {
      alert(error);
      localStorage.clear();
    }
  }

  function saveTokenLocally(token) {
    localStorage.setItem('token', token);
  }

  function saveIsLoggedInTypeLocally(loginType) {
    localStorage.setItem('loginType', loginType);
  }

  const checkCredentials = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const {
        data: { token },
      } = await login({
        login: email,
        senha: password,
        tipoLogin: loginType,
      });

      saveIsLoggedInTypeLocally(loginType);
      saveTokenLocally(token);

      if (loginType === 'SECRETARIA') {
        history.push('/admin');
      } else if (loginType === 'POSTO_VACINACAO') {
        history.push('/posto');
      }
    } catch (err) {
      alert('Erro ao tentar realizar login');
      localStorage.clear();
    } finally {
      setIsLoading(false);
    }
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
                value="POSTO_VACINACAO"
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
                value="SECRETARIA"
                checked={loginType === 'SECRETARIA'}
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
