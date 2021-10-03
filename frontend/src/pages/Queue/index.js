import { useState, useEffect } from 'react';
import {
  PageWrapper,
  PageTitle,
  PageContentContainer,
} from '../../components/shared/CommonStyles';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { getSenhaAtualPosto } from '../../services/pacienteService';

export default function Queue() {
  const [queuePosition, setQueuePosition] = useState(-1);
  const { vaccinationCode, postoId, vaccinationPosition } = useContext(
    UserContext
  );
  let history = useHistory();

  setInterval(() => {
    loadQueue({ postoId, vaccinationCode });
  }, 30000);

  useEffect(() => {
    loadQueue({ postoId, vaccinationCode });
  }, []);

  const loadQueue = async ({ postoId }) => {
    if (!vaccinationCode) {
      history.push('/');
    }

    const { data: posicaoAtual } = await getSenhaAtualPosto({
      idPosto: postoId,
    });
    setQueuePosition(posicaoAtual + 1);
  };

  return (
    <PageWrapper>
      <PageContentContainer>
        <PageTitle>A sua senha para vacinação é: </PageTitle>
        <VaccinationCodeContainer>{vaccinationCode}</VaccinationCodeContainer>

        <CardContainer>
          <Card>
            <CardTitle>Progresso da Fila</CardTitle>
            <CardSubtitle>Sua posicao: {vaccinationPosition}</CardSubtitle>
            <CardSubtitle>Próxima posição: {queuePosition}</CardSubtitle>
          </Card>
        </CardContainer>
      </PageContentContainer>
    </PageWrapper>
  );
}

const CardContainer = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  justify-content: space-around;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 500px;
  height: 250px;
  font-size: 20px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  align-items: center;
  padding: 10px 10px;

  @media screen and (max-width: 1500px) {
    width: 40%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1200px) {
    width: 500px;
    max-width: 100vw;
  }
`;

const VaccinationCodeContainer = styled.div`
  width: 800px;
  font-weight: 500;
  font-size: 40px;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  margin-bottom: 30px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const CardTitle = styled.div`
  font-weight: 500;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  padding-bottom: 5px;
  margin-bottom: 20px;
  border-bottom: 2px black solid;
`;

const CardSubtitle = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 25px;
`;

const QueuePreview = styled.div`
  margin-bottom: 10px;
  font-size: 40px;
`;
