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
import Queue from './pages/Queue';
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

          <Route path="/fila" component={Queue} />

          <ProtectedRouteAdmin exact path="/admin" component={Admin} />
          <ProtectedRouteAdmin
            path="/admin/cadastro/posto"
            component={Signup}
          />
          <ProtectedRouteAdmin
            path="/admin/cadastro/lote"
            component={CreateLot}
          />
          <ProtectedRouteAdmin
            path="/admin/alocacao/lote"
            component={SendLotToUnit}
          />
          <ProtectedRouteAdmin
            path="/admin/cadastro/vacina"
            component={RegisterVaccine}
          />

          <ProtectedRouteUnit
            exact
            path="/posto"
            component={VaccinationUnitPage}
          />
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
