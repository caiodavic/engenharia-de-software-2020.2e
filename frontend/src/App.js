import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Admin/SignUpVaccinUnit';
import Admin from './pages/Admin';
import { Reset } from 'styled-reset';
import GlobalStyle from './globalStyle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserContext from './contexts/UserContext';
import { useState } from 'react';

const App = () => {
  const [token, setToken] = useState('');
  return (
    <>
      <BrowserRouter>
        <Reset />
        <GlobalStyle />

        <Navbar />

        <Switch>
          <UserContext.Provider value={{ token, setToken }}>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route exact path="/admin">
              <Admin />
            </Route>

            <Route path="/admin/cadastro/posto">
              <Signup />
            </Route>

            <Route path="/admin/alocacao/lote"></Route>

            <Route path="/admin/cadastro/lote"></Route>

            <Route path="/admin/cadastro/vacina"></Route>
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
