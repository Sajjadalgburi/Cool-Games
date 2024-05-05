import { Outlet } from 'react-router-dom';
import Navigation from './Components/Navbar/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
