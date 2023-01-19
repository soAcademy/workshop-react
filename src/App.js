import './App.css';

import { FaFacebook } from "react-icons/fa";
import Resume from './Resume';
import Tailwinproject from './Tailwinproject';
import Shop from './Shop';
//import Navbar from '../components/Navbar.jsx';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/Aboutme';
import Aboutme from './components/Aboutme';
import Ballport from './components/Ballport';
const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Aboutme />
    <Ballport />

    {/* <Resume/> */}
    {/* <Tailwinproject /> */}
    {/* <Shop/> */}
    
    </>
  );
};

export default App;














