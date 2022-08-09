import { BrowserRouter } from 'react-router-dom'
import { PublicRoutes } from './config/Routes';
import './globalstyles.scss'

function App() {
  return (
      <BrowserRouter className="App">
        <PublicRoutes />
      </BrowserRouter>
  );
}

export default App;
