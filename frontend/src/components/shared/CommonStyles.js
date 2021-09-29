import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const PageTitle = styled.div`
  font-weight: 500;
  font-size: 40px;
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const PageSubTitle = styled.div`
  width: 800px;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export { PageWrapper, PageTitle, PageSubTitle };
