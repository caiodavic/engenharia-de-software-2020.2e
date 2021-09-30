import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 150px;

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const PageTitle = styled.div`
  font-weight: 500;
  font-size: 40px;
  width: 800px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  text-align: center;

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
  color: white;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 800px) {
    max-width: 100vw;
    text-align: center;
  }
`;

const StyledForm = styled.form`
  margin-top: 30px;
  border-radius: 20px;
  font-size: 20px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 40px;
  height: fit-content;

  & > label {
    width: 60%;
    font-size: 22px;
    margin-bottom: 3px;
  }

  & > input {
    font-size: 20px;
    margin: 5px 0px 20px 0px;
    width: 60%;
    height: fit-content;
    border: 1.5px solid grey;
    padding: 7px 5px;
    border-radius: 2px;
  }

  & > input[type='submit'] {
    font-size: 20px;
    cursor: pointer;
    margin-top: 10px;
    color: white;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background-color: #255aff;
    min-width: fit-content;
  }

  datalist {
    max-height: 50px;
  }
`;

export { PageWrapper, PageTitle, PageSubTitle, StyledForm };
