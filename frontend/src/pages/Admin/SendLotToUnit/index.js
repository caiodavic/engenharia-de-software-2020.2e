import styled from 'styled-components';
import { useState } from 'react';
import {
  PageWrapper,
  PageTitle,
  StyledForm,
} from '../../../components/shared/CommonStyles';
import { useContext, useEffect } from 'react';
import UserContext from '../../../contexts/UserContext';
import { getLotsList, getUnitsList } from '../../../services/api';

export default function SendLotToUnit() {
  const [lotsList, setLotsList] = useState([]);
  const [unitsIdList, setUnitsIdList] = useState([]);

  const [idLote, setIdLote] = useState('');
  const [idPosto, setIdPosto] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(UserContext);

  useEffect(loadLotsAndUnits, [token]);

  function loadLotsAndUnits() {
    const lots = getLotsList({ token });
    const units = getUnitsList({ token });

    setLotsList(lots);
    setUnitsIdList(units.map((unit) => unit.id));
  }

  function submitInput(e) {
    e.preventDefault();
    console.log({ idLote }, { idPosto });
  }

  return (
    <PageWrapper>
      <SendLotToUnitWrapper>
        <PageTitle> Cadastrar Lote em Posto </PageTitle>
        <StyledForm onSubmit={submitInput}>
          <label htmlFor="lote">Lote: </label>
          <input
            value={idLote}
            placeholder="Selecione o ID do Lote"
            onChange={(e) => setIdLote(e.target.value)}
            list="id-lote"
          />
          <datalist id="id-lote">
            {lotsList.map((lot) => (
              <option value={lot.id} />
            ))}
          </datalist>

          <label htmlFor="id-posto">ID do Posto: </label>
          <input
            value={idPosto}
            onChange={(e) => setIdPosto(e.target.value)}
            list="id-posto"
            placeholder="Selecione o ID do Posto"
          />
          <datalist id="id-posto">
            {unitsIdList.map((unitId) => (
              <option value={unitId} />
            ))}
          </datalist>
          <input type="submit" disabled={isLoading} value="Cadastrar" />
        </StyledForm>
      </SendLotToUnitWrapper>
    </PageWrapper>
  );
}

const SendLotToUnitWrapper = styled.div`
  width: 800px;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;
