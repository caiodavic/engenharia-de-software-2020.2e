import styled from 'styled-components';
import logo from '../../assets/logoagencia.svg';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function Navbar() {
  let history = useHistory();
  function goToHomeScreen() {
    history.push('/');
  }

  return (
    <NavbarWrapper>
      <Logo src={logo} onClick={goToHomeScreen} />
      <LoginButton>
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
          Área Administrativa
        </Link>
      </LoginButton>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  width: 100%;
  z-index: 1;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 20px 5%;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const LoginButton = styled.div`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f3fd3;
  padding: 10px 10px;
  border-radius: 10px;
  width: fit-content;
  height: 50px;

  & > a:hover {
    border-bottom: 2px solid white;
  }
`;
