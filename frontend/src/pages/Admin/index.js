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
} from "./style";

export default function Admin() {
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
