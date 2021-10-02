import { useState } from 'react';
import {
  PageWrapper,
  PageTitle,
  StyledForm,
  PageContentContainer,
} from '../../../components/shared/CommonStyles';
import { useHistory } from 'react-router-dom';
import { savePosto } from '../../../services/postoService';

export default function Signup() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [telephoneNum, setTelephoneNum] = useState(''); // TO-DO validacao num telefone
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('token');
  const history = useHistory();

  const submitInput = async (e) => {
    e.preventDefault();
    console.log(name, email, password, address, telephoneNum);

    setIsLoading(true);
    try {
      await savePosto({
        id,
        nome: name,
        email,
        telefone: telephoneNum,
        senha: password,
        endereco: address,
        token,
      });

      history.push('/postos');
    } catch (err) {
      alert('Erro ao salvar novo posto de vacinação');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>
      <PageContentContainer>
        <PageTitle>Cadastrar novo Posto de Saúde</PageTitle>

        <StyledForm onSubmit={submitInput}>
          <label htmlFor="name">Id: </label>
          <input
            type="number"
            placeholder="Insira o id do posto (Deve ser único para cada posto)"
            id="name"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />

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
