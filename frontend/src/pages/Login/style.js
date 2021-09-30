import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginWrapper = styled.div`
  width: 800px;
  height: fit-content;

  @media screen and (max-width: 800px) {
    width: 100vh;
  }
`;

const LoginTypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div {
    margin-bottom: 10px;
  }
`;

const LinkToSignUp = styled(Link)`
  font-size: 18px;
`;

export { LoginWrapper, LoginTypesContainer, LinkToSignUp };
