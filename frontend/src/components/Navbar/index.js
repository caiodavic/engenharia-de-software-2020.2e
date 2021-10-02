import logo from '../../assets/logoagencia.svg';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { NavbarWrapper, Logo, LoginButton, Buttons, ExitButton } from './style';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [token, setToken] = useState(null);
  let history = useHistory();

  useEffect(() => {
    function loadToken() {
      setToken(localStorage.getItem('token'));
    }
    window.addEventListener('storage', loadToken);
  }, []);

  function goToHomeScreen() {
    history.push('/');
    console.log(token);
  }

  function exit() {
    localStorage.clear();
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
