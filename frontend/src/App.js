import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Admin/SignUpVaccinationUnit";
import Admin from "./pages/Admin";
import VaccinationUnits from "./pages/VaccinationUnits";
import RegisterVaccine from "./pages/Admin/RegisterVaccine";
import { Reset } from "styled-reset";
import GlobalStyle from "./globalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import Footer from "./components/Footer";
import CreateLot from "./pages/Admin/CreateLot";
import SendLotToUnit from "./pages/Admin/SendLotToUnit";
import VaccinationUnitPage from "./pages/VaccinationUnitPage";
import ProtectedRouteAdmin from "./utils/ProtectedRouteAdmin";
import ProtectedRouteUnit from "./utils/ProtectedRouteUnit";

const App = () => {
  const [token, setToken] = useState("");
  const [isLoggedInType, setIsLoggedInType] = useState("");

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
              path="/posto/:idPosto"
              loggedIn={isLoggedInType}
              component={VaccinationUnitPage}
            />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
