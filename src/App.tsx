import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import brand from './assets/chuck-logo.png';

function App() {
  return (
    <Router>
      <img src={ brand } alt="Chuck Norris Jokes" />
      <AppRoutes />
    </Router>
  );
}

export default App;
