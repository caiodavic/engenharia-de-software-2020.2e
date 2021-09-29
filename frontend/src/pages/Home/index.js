import { PageWrapper } from '../../components/shared/CommonStyles';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CodeInput = styled.form`
  font-size: 30px;
  label {
    font-weight: 500;
    color: white;
  }
`;

const SearchCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 20px;
  background-color: white;
  margin: 30px 0px 50px 0px;
  padding: 12px 8px;

  input {
    border: none;
    font-size: 20px;
    &:focus {
      outline: none;
    }
  }

  ion-icon {
    cursor: pointer;
  }
`;

const LinkButton = styled(Link).attrs({
  style: { textDecoration: 'none', color: 'black' },
})`
  background-color: lightblue;
  font-size: 25px;
  width: 200px;
  margin: 10px 20px;
  padding: 10px 5px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export default Home;
