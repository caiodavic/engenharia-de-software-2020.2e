import { PageWrapper, PageTitle } from '../../components/shared/CommonStyles';
import { useState, useEffect } from 'react';
import {
  VaccinationUnitsWrapper,
  UnitsCardsContainer,
  UnitCard,
  UnitName,
  UnitDetails,
  DetailTitle,
} from './style';

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
