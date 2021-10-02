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
import Footer from './components/Footer';
import CreateLot from './pages/Admin/CreateLot';
import SendLotToUnit from './pages/Admin/SendLotToUnit';
import VaccinationUnitPage from './pages/VaccinationUnitPage';
import ProtectedRouteAdmin from './utils/ProtectedRouteAdmin';
import ProtectedRouteUnit from './utils/ProtectedRouteUnit';
import { GlobalContextProvider } from './contexts/UserContext';

const App = () => {
  return (
    <GlobalContextProvider>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Footer />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/postos" component={VaccinationUnits} />
          <Route path="/login" component={Login} />

          <ProtectedRouteAdmin
            exact
            loggedIn={isLoggedInType}
            path="/admin"
            component={Admin}
          />
          <ProtectedRouteAdmin
            path="/admin/cadastro/posto"
            loggedIn={isLoggedInType}
            component={Signup}
          />
          <ProtectedRouteAdmin
            path="/admin/cadastro/lote"
            loggedIn={isLoggedInType}
            component={CreateLot}
          />
          <ProtectedRouteAdmin
            path="/admin/alocacao/lote"
            loggedIn={isLoggedInType}
            component={SendLotToUnit}
          />
          <ProtectedRouteAdmin
            path="/admin/cadastro/vacina"
            loggedIn={isLoggedInType}
            component={RegisterVaccine}
          />

          <ProtectedRouteUnit
            exact
            path="/posto"
            loggedIn={isLoggedInType}
            component={VaccinationUnitPage}
          />
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
