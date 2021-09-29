import styled from 'styled-components';
import { useState } from 'react';
import {
  PageWrapper,
  PageTitle,
  PageSubTitle,
} from '../../components/shared/CommonStyles';

// usando login tipo="posto" como posto de vacinacao de tipo="secretaria" como secretaria de saúde
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('posto');
  const [isLoading, setIsLoading] = useState(false);

  function checkCredentials(e) {
    e.preventDefault();
    console.log(email, password, loginType);
  }

  return (
    <PageWrapper>
      <LoginWrapper>
        <PageTitle>Bem vindo!</PageTitle>

        <PageSubTitle>
          Realize seu Login ou Cadastre novo Posto de Vacinação
        </PageSubTitle>

        <LoginForm onSubmit={checkCredentials}>
          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
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
        </LoginForm>
      </LoginWrapper>
    </PageWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 800px;
  height: fit-content;
`;

const LoginForm = styled.form`
  border-radius: 20px;
  font-size: 20px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 50px;
  height: fit-content;

  & > input {
    margin: 5px 0px 20px 0px;
    width: 60%;
    height: 20px;
    border: 1.5px solid grey;
    border-radius: 2px;
  }

  & > input[type='submit'] {
    margin-top: 10px;
    width: 150px;
    height: 50px;
    border-radius: 2px;
  }
`;

const LoginTypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div {
    margin-bottom: 10px;
  }
`;
