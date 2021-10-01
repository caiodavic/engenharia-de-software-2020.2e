import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;

const CodeInput = styled.form`
  font-size: 30px;
  label {
    font-weight: 500;
    font-size: 40px;
    color: white;
  }
`;

const SearchCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 20px;
  background-color: white;
  margin: 30px 0px 50px 0px;
  padding: 12px 8px;

  input {
    border: none;
    font-size: 27px;
    &:focus {
      outline: none;
    }
  }

  ion-icon {
    cursor: pointer;
  }
`;

const LinkButton = styled(Link).attrs({
  style: { textDecoration: 'none', color: 'black' },
})`
  background-color: lightblue;
  font-size: 25px;
  width: 200px;
  margin: 10px 20px;
  padding: 10px 5px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export { HomeWrapper, CodeInput, SearchCode, LinkButton };
