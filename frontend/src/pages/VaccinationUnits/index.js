import { PageWrapper, PageTitle } from '../../components/shared/CommonStyles';
import UserContext from '../../contexts/UserContext';
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
  const { token } = useContext(UserContext);

  const loadUnits = async ({ token }) => {
    try {
      const { data: postos } = await loadPostos({ token });
      setUnits(postos);
    } catch (err) {
      alert('Erro ao carregar postos');
    }
  };

  useEffect(() => {
    loadUnits({ token });
  }, [token]);

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
                        Vacina {lote.vacina.nomeVacina} -{' '}
                        {lote.qtdDosesDisponiveis} doses
                        <br />
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
