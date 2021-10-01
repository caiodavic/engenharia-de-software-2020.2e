import {
  PageWrapper,
  PageTitle,
  PageSubTitle,
} from '../../components/shared/CommonStyles';
import React from 'react';
import { useState } from 'react';
import { HomeWrapper, CodeInput, SearchCode, LinkButton } from './style';
import { postVaccinationCode } from '../../services/api';

const Home = () => {
  const [code, setCode] = useState('');

  function sendCode(e) {
    e.preventDefault();
    if (code === '') {
      alert('Insira um código!');
    } else {
      console.log(code);
      const body = { code: code };
      postVaccinationCode({ body });
    }
  }

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
