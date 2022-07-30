import { BrowserRouter } from 'react-router-dom'
import { PublicRoutes } from './config/Routes';
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <BrowserRouter className="App">
        <PublicRoutes />
      </BrowserRouter>
      <Helmet>
        <script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js' type='text/javascript' />
      </Helmet>
    </>
  );
}

export default App;
