import {
  PageWrapper,
  PageTitle,
  PageSubTitle,
} from "../../components/shared/CommonStyles";
import {
  AdminPageWrapper,
  ButtonsMenuContainer,
  ButtonCategory,
  CategoryTitle,
  ButtonsContainer,
  Button,
<<<<<<< HEAD
} from './style';
import { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import { isAdmin } from '../../services/api';
import { useHistory } from 'react-router';

export default function Admin() {
  const { token } = useContext(UserContext);
  useEffect(checkIfAdmin, [token]);
  let history = useHistory();

  function checkIfAdmin() {
    console.log(token);
    if (!isAdmin(token)) {
      alert('usuário não é admin!');
      history.push('/login');
    }
  }

=======
} from "./style";

export default function Admin() {
>>>>>>> Develop
  return (
    <PageWrapper>
      <AdminPageWrapper>
        <PageTitle>Bem vindo, Secretário de Saúde!</PageTitle>
        <PageSubTitle>Escolha dentre as ações abaixo</PageSubTitle>

        <ButtonsMenuContainer>
          <ButtonCategory>
            <CategoryTitle>Postos de Vacinação </CategoryTitle>

            <ButtonsContainer>
              <Button to="/admin/cadastro/posto">
                Cadastrar Novo Posto de Vacinação
              </Button>

              <Button to="/admin/alocacao/lote">
                Alocar Lote de Vacina em Posto
              </Button>
            </ButtonsContainer>
          </ButtonCategory>

          <ButtonCategory>
            <CategoryTitle>Controle de Vacinas </CategoryTitle>

            <ButtonsContainer>
              <Button to="/admin/cadastro/lote">
                Cadastrar novo Lote de Vacina
              </Button>

              <Button to="/admin/cadastro/vacina">
                Cadastrar novo tipo de Vacina
              </Button>
            </ButtonsContainer>
          </ButtonCategory>
        </ButtonsMenuContainer>
      </AdminPageWrapper>
    </PageWrapper>
  );
}
