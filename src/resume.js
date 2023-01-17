import logo from './logo.svg';
import './resume.css';

const resume = () => {
return (
  <div className="resume">
      <header className="resume-header">
        <img src={logo} className="resume-logo" alt="logo" />
        <p>
          Hello React
        </p>
      </header>
  </div>
);

};

export default resume;