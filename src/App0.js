import './App.css';
import image from './bondrungrot.jpeg';
const hello = "Hello world!";


function App() {
  return (
  <div class="container">container
    <div className='header'>header</div>
    <div className='frame'>frame
        <div className="left">
          <img className="img" src={image}></img>
        </div>
        <div className='right'>right</div>
    </div>
  </div>

  );
};

export default App;