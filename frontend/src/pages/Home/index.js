import {
  PageWrapper,
  PageTitle,
  PageSubTitle,
} from '../../components/shared/CommonStyles';
import React from 'react';
import { useState } from 'react';
import { HomeWrapper, CodeInput, SearchCode, LinkButton } from './style';
import { confirmCode } from '../../services/pacienteService';
import { useHistory } from 'react-router';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';

const Home = () => {
  const [code, setCode] = useState('');
  let history = useHistory();
  const { setVaccinationCode } = useContext(UserContext);

  const sendCode = async (e) => {
    e.preventDefault();
    if (code === '') {
      alert('Insira um código!');
    } else {
      confirmCodeAndGenerateSenha({ code });
    }
  };

  const confirmCodeAndGenerateSenha = async ({ code }) => {
    try {
      setVaccinationCode(code);
      history.push('/fila');
      await confirmCode({ codigoPosto: code });
    } catch (err) {
      alert('Código inválido');
    }
  };

  return (
    <PageWrapper>
      <HomeWrapper>
        <PageTitle>Insira seu Código Aqui</PageTitle>
        <PageSubTitle> </PageSubTitle>
        <CodeInput onSubmit={sendCode}>
          <SearchCode>
            <input
              type="text"
              value={code}
              id="code"
              placeholder="Inserir Código Local"
              onChange={(e) => setCode(e.target.value)}
            ></input>
            <ion-icon name="search" onClick={sendCode}></ion-icon>
          </SearchCode>
        </CodeInput>
        <LinkButton to="/postos"> Ver Postos de Vacinação </LinkButton>
      </HomeWrapper>
    </PageWrapper>
  );
};

export default Home;
