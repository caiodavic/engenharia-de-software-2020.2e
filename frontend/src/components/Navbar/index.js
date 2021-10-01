import logo from '../../assets/logoagencia.svg';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { NavbarWrapper, Logo, LoginButton, Buttons, ExitButton } from './style';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
  const { setToken, setIsLoggedInType, isLoggedInType } =
    useContext(UserContext);
  let history = useHistory();

  function goToHomeScreen() {
    history.push('/');
  }

  function exit() {
    setToken('');
    setIsLoggedInType('');
    history.push('/login');
  }

  return (
    <NavbarWrapper>
      <Logo src={logo} onClick={goToHomeScreen} alt="Logo" />
      <Buttons>
        <LoginButton>
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
            {useMediaQuery({ query: '(max-width:800px)' })
              ? 'Login'
              : 'Área Administrativa'}
          </Link>
        </LoginButton>
        {isLoggedInType ? (
          <ExitButton onClick={exit}>
            <p>Sair</p>
          </ExitButton>
        ) : (
          ''
        )}
      </Buttons>
    </NavbarWrapper>
  );
}
