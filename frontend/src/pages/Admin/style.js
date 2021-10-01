import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AdminPageWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 800px) {
    max-width: 100vh;
  }
`;

const ButtonsMenuContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 90%;
  justify-content: space-around;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonCategory = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 40%;
  height: 200px;
  font-size: 20px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  align-items: center;
  padding: 20px 20px;
  margin: 15px 0px;
  @media screen and (max-width: 1200px) {
    width: fit-content;
  }
`;

const CategoryTitle = styled.div`
  font-size: 25px;
  font-weight: 500;
`;

const ButtonsContainer = styled.div`
  margin: 30px;
  display: flex;
`;

const Button = styled(Link).attrs({
  style: { textDecoration: 'none', color: 'black' },
})`
  background-color: lightblue;
  width: 100%;
  height: 80px;
  margin: 10px 20px;
  padding: 10px 5px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1200px) {
    width: fit-content;
  }
`;

export {
  AdminPageWrapper,
  ButtonsMenuContainer,
  ButtonCategory,
  CategoryTitle,
  ButtonsContainer,
  Button,
};
