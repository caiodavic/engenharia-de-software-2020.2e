import styled from 'styled-components';
import { useState } from 'react';
import {
  PageWrapper,
  PageTitle,
  PageSubTitle,
  StyledForm,
} from '../../components/shared/CommonStyles';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function submitInput(e) {
    e.preventDefault();
    console.log(email, password, address);
  }

  return (
    <PageWrapper>
      <SignupWrapper>
        <PageTitle>Cadastrar novo Posto de Saúde</PageTitle>

        <StyledForm onSubmit={submitInput}>
          <label htmlFor="email">E-mail do Administrador: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="address">Endereço: </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <label htmlFor="password">Senha: </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input type="submit" disabled={isLoading} value="Cadastrar" />
        </StyledForm>
      </SignupWrapper>
    </PageWrapper>
  );
}

const SignupWrapper = styled.div`
  width: 800px;
`;
