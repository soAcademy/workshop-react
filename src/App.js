import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Header2, Header3 } from './Header2';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React! 
        </p>
      <Header />
      <Header2 /> 
      
      <Header3 />
      
      
        <h1 style={{color: "#7D2411"}}>Hello</h1>
        
      </header>
    </div>
  );
};

export default App;



