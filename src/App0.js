import logo from "./logo.svg";
import "./App0.css";

function App() {
  return (
    <table className="table">
      <tr className="profile">
        <th className="row1" width="200px">
          <img src="./profilepicture.jpg" className="img" width="170px"></img>
          <h3 align="left">About Me</h3>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore dgfhgfhfdhfgnhsfgnhghnfgshfghfghfhgf
          </h5>
        <h3>Website & Local Links</h3>
          <p>Facebook:</p>
          <p>Instagram</p>
          <p>Line</p>
        </th>
        <th>
          <h1 className='name'>Anawil <br></br>Yuktanand</h1>
          <h3 className='table-align'>Work Experience</h3>
          <h4 className='glow-pixel'>Glow Pixel</h4>
          <p className='info3'>Orlando</p>
          <p className='info3'>2015-2016</p>

          <h4 className='glow-pixel'>LOREM IPSUM</h4>
          <p className='info3'>New York</p>
          <p className='info3'>2014-2015</p>

          <h4 className='glow-pixel'>PIXELATE AGENCY</h4>
          <p className='info3'>New Jersey</p>
          <p className='info3'>2013-2014</p>

          <h3 className='table-align'>Education</h3>
          <h4 className='glow-pixel'>UNIVERSITY OF UK</h4>
          <p className='info3'>Toronto</p>
          <p className='info3'>2010-2012</p>

          <h4 className='glow-pixel'>COLLEGE OF ART</h4>
          <p className='info3'>New Ark</p>
          <p className='info3'>2016-2010</p>
        </th>
        </tr>
    </table>
  );
}

export default App;
