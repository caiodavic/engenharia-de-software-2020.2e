import {
  PageWrapper,
  PageTitle,
  PageSubTitle,
} from '../../components/shared/CommonStyles';
import {
  AdminPageWrapper,
  ButtonsMenuContainer,
  ButtonCategory,
  CategoryTitle,
  ButtonsContainer,
  Button,
} from './style';
import { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import { isAdmin } from '../../services/api';

export default function Admin() {
  const { token } = useContext(UserContext);
  useEffect(checkIfAdmin, [token]);

  function checkIfAdmin() {
    console.log(token);
    if (!isAdmin(token)) {
      alert('usuário não é admin!');
      return;
    }
  }

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
