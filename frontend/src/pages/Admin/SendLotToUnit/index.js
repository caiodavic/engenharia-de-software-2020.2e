import { useState } from 'react';
import {
  PageWrapper,
  PageTitle,
  StyledForm,
  PageContentContainer,
} from '../../../components/shared/CommonStyles';
import { useHistory } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../../../contexts/UserContext';
import { getLotsList, getUnitsList } from '../../../services/api';
import { alocarLote } from '../../../services/postoService';

export default function SendLotToUnit() {
  const [lotsList, setLotsList] = useState([]);
  const [unitsIdList, setUnitsIdList] = useState([]);

  const [idLote, setIdLote] = useState('');
  const [idPosto, setIdPosto] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(UserContext);
  const history = useHistory();

  useEffect(loadLotsAndUnits, [token]);

  function loadLotsAndUnits() {
    const lots = getLotsList({ token });
    const units = getUnitsList({ token });

    setLotsList(lots);
    setUnitsIdList(units.map((unit) => unit.id));
  }

  const submitInput = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await alocarLote({ idLote, idPosto, token });
      history.push('/postos');
    } catch (err) {
    } finally {
      setIsLoading(false);
    }

    console.log({ idLote }, { idPosto });
  };

  return (
    <PageWrapper>
      <PageContentContainer>
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
      </PageContentContainer>
    </PageWrapper>
  );
}
