import { PageWrapper, PageTitle } from '../../components/shared/CommonStyles';
import UserContext from '../../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { loadPostos } from '../../services/postoService';
import {
  VaccinationUnitsWrapper,
  UnitsCardsContainer,
  UnitCard,
  UnitName,
  UnitDetails,
  DetailTitle,
} from './style';

export default function VaccinationUnits() {
  const [units, setUnits] = useState([]);
  const history = useHistory();
  const { token, isLoggedInType } = useContext(UserContext);

  const loadUnits = async () => {
    try {
      const { data: postos } = await loadPostos({ token });
      setUnits(postos);
    } catch (err) {
      console.err('ERRO AO CARREGAOR POSTOS');
    }
  };

  useEffect(() => {
    loadUnits();
  }, []);

  return (
    <PageWrapper>
      <VaccinationUnitsWrapper>
        <PageTitle>Postos de Vacinação</PageTitle>
        <UnitsCardsContainer>
          {units.map((unit) => (
            <UnitCard>
              <UnitName>{unit.nome}</UnitName>

              <UnitDetails>
                <p>
                  <DetailTitle>Endereço: </DetailTitle> {unit.endereco}
                  <br />
                  {unit.lotesDeVacina.map((lote) => {
                    return (
                      <>
                        <DetailTitle>Vacina: </DetailTitle>
                        {lote.vacina.nomeVacina}
                        <br />
                        <DetailTitle>Quantidade: </DetailTitle>
                        {lote.qtdDosesDisponiveis}
                      </>
                    );
                  })}
                </p>
              </UnitDetails>
            </UnitCard>
          ))}
        </UnitsCardsContainer>
      </VaccinationUnitsWrapper>
    </PageWrapper>
  );
}
