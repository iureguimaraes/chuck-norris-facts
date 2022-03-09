import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppRoutes } from './routes';

import GlobalStyle from './styles/global';

import brand from './assets/chuck-logo.png';

function App() {
  return (
    <Router>
      <h1>
        <Link to="/">
          <img src={brand} alt="Chuck Norris Facts" />
        </Link>
      </h1>
      <AppRoutes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
