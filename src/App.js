import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './components/styles/Global.styles';
import Signup from './components/Signup';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { MainDiv } from './components/styles/App.styles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <MainDiv>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact component={NotFound} />
        </Switch>
      </MainDiv>
    </Router>
  );
};

export default App;
