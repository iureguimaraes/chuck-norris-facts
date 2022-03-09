import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Brand } from './components/Brand';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <Brand />      
      <AppRoutes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
