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
import { alocarLote } from '../../../services/postoService';
import { listAllLotesAvailable } from '../../../services/loteService';
import { listAllPostos } from '../../../services/postoService';

export default function SendLotToUnit() {
  const [lotsList, setLotsList] = useState([]);
  const [unitsIdList, setUnitsIdList] = useState([]);

  const [idLote, setIdLote] = useState('');
  const [idPosto, setIdPosto] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    loadLotsAndUnits({ token });
  }, [token]);

  const loadLotsAndUnits = async () => {
    const { data: lots } = await listAllLotesAvailable({ token });
    const { data: units } = await listAllPostos({ token });

    if (lots.length === 0) {
      alert('Não há nenhum lote disoponível');
    }

    if (units.length === 0) {
      alert('Não há nenhum posto disponível');
    }

    setLotsList(lots);
    setUnitsIdList(units.map((unit) => unit.id));
  };

  const submitInput = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await alocarLote({ idLote, idPosto, token });
      history.push('/postos');
    } catch (err) {
      alert('Ocorreu um erro ao alocar o lote no posto indicado');
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
