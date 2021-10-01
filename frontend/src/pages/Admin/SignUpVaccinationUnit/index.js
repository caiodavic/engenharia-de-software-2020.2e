import { useState } from 'react';
import {
  PageWrapper,
  PageTitle,
  StyledForm,
  PageContentContainer,
} from '../../../components/shared/CommonStyles';
import UserContext from '../../../contexts/UserContext';
import { useContext } from 'react';
import { postUnitSignUp } from '../../../services/api';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [telephoneNum, setTelephoneNum] = useState(''); // TO-DO validacao num telefone
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(UserContext);

  function submitInput(e) {
    e.preventDefault();
    console.log(name, email, password, address, telephoneNum);
    const body = {
      nome: name,
      email: email,
      senha: password,
      telefone: telephoneNum,
      endereco: telephoneNum,
    };
    postUnitSignUp({ body, token });
  }

  return (
    <PageWrapper>
      <PageContentContainer>
        <PageTitle>Cadastrar novo Posto de Saúde</PageTitle>

        <StyledForm onSubmit={submitInput}>
          <label htmlFor="name">Nome: </label>
          <input
            type="name"
            placeholder="Insira o nome do posto"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            placeholder="exemplo@email.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="address">Endereço: </label>
          <input
            type="text"
            id="address"
            placeholder="Rua das Ostras, 35. Jatobá- SP"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <label htmlFor="password">Senha: </label>
          <input
            type="text"
            id="password"
            placeholder="Insira uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="telephone">Telefone : </label>
          <input
            type="tel"
            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
            id="telephone"
            placeholder="11 99999-8888"
            value={telephoneNum}
            onChange={(e) => setTelephoneNum(e.target.value)}
            required
          />

          <input type="submit" disabled={isLoading} value="Cadastrar" />
        </StyledForm>
      </PageContentContainer>
    </PageWrapper>
  );
}
