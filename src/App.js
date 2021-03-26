import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = ({ history }) => (
  <div>
    <h1>HATS</h1>
    <span>{ history.location.pathname }</span>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/hats" component={ HatsPage } />
      </Switch>
    </div>
  );
}

export default App;
