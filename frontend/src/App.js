import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Admin/SignUpVaccinationUnit';
import Admin from './pages/Admin';
import VaccinationUnits from './pages/VaccinationUnits';
import RegisterVaccine from './pages/Admin/RegisterVaccine';
import { Reset } from 'styled-reset';
import GlobalStyle from './globalStyle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserContext from './contexts/UserContext';
import { useState } from 'react';
import Footer from './components/Footer';
import CreateLot from './pages/Admin/CreateLot';
import SendLotToUnit from './pages/Admin/SendLotToUnit';
import VaccinationUnitPage from './pages/VaccinationUnitPage';

const App = () => {
  const [token, setToken] = useState('');
  const [isLoggedInType, setIsLoggedInType] = useState('');

  return (
    <>
      <BrowserRouter>
        <Reset />
        <GlobalStyle />

        <UserContext.Provider
          value={{ token, setToken, isLoggedInType, setIsLoggedInType }}
        >
          <Navbar />
          <Footer />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/postos">
              <VaccinationUnits />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/admin">
              <Admin />
            </Route>

            <Route exact path="/admin/cadastro/posto">
              <Signup />
            </Route>

            <Route exact path="/admin/cadastro/lote">
              <CreateLot />
            </Route>

            <Route exact path="/admin/alocacao/lote">
              <SendLotToUnit />
            </Route>

            <Route exact path="/admin/cadastro/vacina">
              <RegisterVaccine />
            </Route>

            <Route exact path="/posto">
              <VaccinationUnitPage />
            </Route>
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
