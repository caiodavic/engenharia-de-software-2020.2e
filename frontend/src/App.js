import Home from './pages/Home';
import Login from './pages/Login';
<<<<<<< HEAD
import Signup from './pages/Signup';
=======
>>>>>>> c3c9ecead8a70a4fafa8bbe53d3d1af1f720a43f
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
