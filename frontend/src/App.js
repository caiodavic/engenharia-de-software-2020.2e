import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Reset } from 'styled-reset';
import GlobalStyle from './globalStyle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Reset />
        <GlobalStyle />

        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
