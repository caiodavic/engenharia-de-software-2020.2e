import { PageWrapper } from '../../components/shared/CommonStyles';
import React from 'react';
import { useState } from 'react';
import { HomeWrapper, CodeInput, SearchCode, LinkButton } from './style';

const Home = () => {
  const [code, setCode] = useState('');
  return (
    <PageWrapper>
      <HomeWrapper>
        <CodeInput>
          <label htmlFor="code">Insira seu Código Aqui</label>
          <SearchCode>
            <input
              type="text"
              value={code}
              id="code"
              placeholder="Inserir Código Local"
              onChange={(e) => setCode(e.target.value)}
            ></input>
            <ion-icon name="search"></ion-icon>
          </SearchCode>
        </CodeInput>
        <LinkButton to="/postos"> Ver Postos de Vacinação </LinkButton>
      </HomeWrapper>
    </PageWrapper>
  );
};

export default Home;
