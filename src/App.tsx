import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppRoutes } from './routes';

import GlobalStyle from './styles/global';

import brand from './assets/chuck-logo.png';

function App() {
  return (
    <Router>
      <Link to="/">
        <img src={brand} alt="Chuck Norris Facts" />
      </Link>
      <AppRoutes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
