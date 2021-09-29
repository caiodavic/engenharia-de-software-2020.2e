import styled from 'styled-components';
import { useState } from 'react';
import {
  PageWrapper,
  PageTitle,
  PageSubTitle,
  StyledForm,
} from '../../components/shared/CommonStyles';
import { Link } from 'react-router-dom';

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

        <StyledForm onSubmit={checkCredentials}>
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
          <LinkToSignUp to="/signup">Cadastre novo Posto</LinkToSignUp>
        </StyledForm>
      </LoginWrapper>
    </PageWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 800px;
  height: fit-content;

  @media screen and (max-width: 800px) {
    width: 100vh;
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

const LinkToSignUp = styled(Link)`
  font-size: 18px;
`;
