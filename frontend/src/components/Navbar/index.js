import logo from '../../assets/logoagencia.svg';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { NavbarWrapper, Logo, LoginButton, Buttons, ExitButton } from './style';
import { useMediaQuery } from 'react-responsive';

import { useLocalStorage } from 'usehooks-ts';

export default function Navbar() {
  const [token, setToken] = useLocalStorage('token', null);
  let history = useHistory();

  function goToHomeScreen() {
    history.push('/');
    console.log(token);
  }

  function exit() {
    localStorage.clear();
    history.push('/login');
    setToken(null);
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
        {token ? (
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
