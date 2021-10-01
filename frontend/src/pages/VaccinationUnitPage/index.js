import {
  PageSubTitle,
  PageTitle,
  PageWrapper,
  WarningMsg,
} from '../../components/shared/CommonStyles';
import styled from 'styled-components';
import {
  getUnitLots,
  getUnitQueue,
  postVaccinationConfirmation,
} from '../../services/api';
import UserContext from '../../contexts/UserContext';
import { useContext, useState, useEffect } from 'react';

export default function VaccinationUnitPage() {
  const [lots, setLots] = useState([]);
  const [queue, setQueue] = useState({
    posicaoAtual: null,
    posicaoFinal: null,
  });
  const [confirmationCode, setConfirmationCode] = useState('');
  const { token } = useContext(UserContext);

  useEffect(loadLotsAndQueue, [token, lots, queue]);

  function loadLotsAndQueue() {
    let queue = getUnitQueue({ token });
    console.log(lots);
    setQueue(queue);
  }

  function sendConfirmationCode(e) {
    e.preventDefault();
    console.log(confirmationCode);
  }

  return (
    <PageWrapper>
      <VaccinationUnitPageWrapper>
        <PageTitle>Área do Posto de Vacinação</PageTitle>
        <PageSubTitle>
          Escolha dentre as opções abaixo e confira o Estado da sua fila
        </PageSubTitle>

        <CardsContainer>
          <Card>
            <CardTitle>Acompanhar fila</CardTitle>
            <CardSubtitle>Posição</CardSubtitle>
            <Queue>
              {queue.posicaoAtual} / {queue.posicaoFinal}
            </Queue>

            <InsertCodeContainer>
              <CodeInput onSubmit={sendConfirmationCode}>
                <SearchCode>
                  <input
                    type="text"
                    value={confirmationCode}
                    id="confirmation-code"
                    placeholder="Confirmar senha de Vacinação"
                    onChange={(e) => setConfirmationCode(e.target.value)}
                  ></input>
                  <ion-icon
                    name="checkmark-circle"
                    onClick={sendConfirmationCode}
                  ></ion-icon>
                </SearchCode>
              </CodeInput>
            </InsertCodeContainer>
          </Card>

          <Card>
            <CardTitle>Lotes Disponíveis</CardTitle>
            <LotsPreview>
              {lots.length === 0 ? (
                <WarningMsg>Não há Lotes disponíveis</WarningMsg>
              ) : (
                lots.map((lot) => (
                  <Lot>
                    {lot.id} {lot.vacina.nomeVacina} {lot.qtdDosesDisponiveis}
                  </Lot>
                ))
              )}
            </LotsPreview>
          </Card>
        </CardsContainer>
      </VaccinationUnitPageWrapper>
    </PageWrapper>
  );
}

const VaccinationUnitPageWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 800px) {
    max-width: 100vh;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 90%;
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
  height: 400px;
  font-size: 20px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  align-items: center;
  padding: 10px 10px;
  margin: 15px 0px;

  position: relative;

  @media screen and (max-width: 1500px) {
    width: 40%;
    align-items: center;
  }

  @media screen and (max-width: 1200px) {
    width: 500px;
    max-width: 100vw;
    align-items: center;
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

const Queue = styled.div`
  margin-bottom: 10px;
  font-size: 40px;
`;

const LotsPreview = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  & > li::last-child {
    margin-bottom: 0px;
  }
`;

const Lot = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

const InsertCodeContainer = styled.div``;

const CodeInput = styled.form`
  font-size: 30px;
  position: absolute;
  left: 10%;
  width: 80%;
  right: 10%;
  bottom: 15px;
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
  padding: 12px 8px;

  input {
    border: none;
    font-size: 20px;
    width: 280px;
    overflow: hidden;
    &:focus {
      outline: none;
    }
  }

  ion-icon {
    cursor: pointer;
    color: #0f3fd3;
  }
`;
