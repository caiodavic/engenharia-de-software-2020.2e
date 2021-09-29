import { PageWrapper, PageTitle } from '../../components/shared/CommonStyles';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

var props = [
  {
    enderecoPosto: 'rua blablau',
    nomePosto: 'Posto Ipiranga',
    vacina: { nome: 'astrazeneca', quantidade: '100' },
  },
  {
    enderecoPosto: 'rua blablau',
    nomePosto: 'Posto Ipiranga',
    vacina: { nome: 'astrazeneca', quantidade: '100' },
  },
  {
    enderecoPosto: 'rua blablau',
    nomePosto: 'Posto Ipiranga',
    vacina: { nome: 'astrazeneca', quantidade: '100' },
  },
  {
    enderecoPosto: 'rua blablau',
    nomePosto: 'Posto Ipiranga',
    vacina: { nome: 'astrazeneca', quantidade: '100' },
  },
  {
    enderecoPosto: 'rua blablau',
    nomePosto: 'Posto Ipiranga',
    vacina: { nome: 'astrazeneca', quantidade: '100' },
  },
  {
    enderecoPosto: 'rua blablau',
    nomePosto: 'Posto Ipiranga',
    vacina: { nome: 'astrazeneca', quantidade: '100' },
  },
];

export default function VaccinationUnits() {
  const [units, setUnits] = useState([]);

  useEffect(loadUnits, []);

  function loadUnits() {
    setUnits(props);
  }

  return (
    <PageWrapper>
      <VaccinationUnitsWrapper>
        <PageTitle>Postos de Vacinação</PageTitle>
        <UnitsCardsContainer>
          {units.map((unit) => (
            <UnitCard>
              <UnitName>{unit.nomePosto}</UnitName>

              <UnitDetails>
                <p>
                  <DetailTitle>Endereço: </DetailTitle> {unit.enderecoPosto}
                  <br />
                  <DetailTitle>Vacina: </DetailTitle>
                  {unit.vacina.nome}
                  <br />
                  <DetailTitle>Quantidade: </DetailTitle>
                  {unit.vacina.quantidade}
                </p>
              </UnitDetails>
            </UnitCard>
          ))}
        </UnitsCardsContainer>
      </VaccinationUnitsWrapper>
    </PageWrapper>
  );
}

const VaccinationUnitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UnitsCardsContainer = styled.div`
  height: fit-content;
  display: flex;
  max-width: 90%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;

  @media screen and (max-width: 800px) {
    max-width: 100vh;
  }
`;

const UnitCard = styled.div`
  width: 300px;
  background-color: white;
  border: 1px solid black;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const UnitName = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const UnitDetails = styled.div`
  display: flex;
  line-height: 150%;
  flex-direction: column;
  font-size: 20px;
`;

const DetailTitle = styled.span`
  font-weight: 500;
`;
