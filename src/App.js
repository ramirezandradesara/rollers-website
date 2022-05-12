import './App.scss';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Rollers } from './components/pages/Rollers';
import { Clothing } from './components/pages/Clothing';
import { ProtectiveGear } from './components/pages/ProtectiveGear';
import { Contact } from './components/pages/Contact';


function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar /> {/* renderizar el navbar siempre dentro del BrowserRouter */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/rollers" element={<Rollers />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/protectivegear" element={<ProtectiveGear />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* </BrowserRouter> reubicado en index.js */}
    </>
  );
}

export default App;
