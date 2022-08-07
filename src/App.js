import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './pages/blog'
import 'bootstrap/dist/css/bootstrap.css';
import linkedIn from './asset/img/linkedIn.png'
import gtiImage from './asset/img/gti.png'

function App() {
  return (
    <div className="App">

      <div className='container mainContent'>

        <div className='row pt-5'>
            <h1 className=' title'>Jishin Kathiran  <a href='https://www.linkedin.com/in/jishinkathiran/' target='_blank'><img src={linkedIn} width='45'/></a> <a href='https://www.linkedin.com/in/jishinkathiran/' target='_blank'><img src={gtiImage} width='50' /></a> </h1>
            <p className='des'>SharePoint and PowerPlatform developer </p>
        </div>
        <div className='row d-flex' id='navRow'>
        <ul className="nav">
          <li className="nav-item" id='spfx'>
            <a className="nav-link active" aria-current="page" href="#">SPFx</a>
          </li>
          <li className="nav-item" id='powerApps'>
            <a className="nav-link" href="#">PowerApps </a>
          </li>
          <li className="nav-item" id='powerAuto'>
            <a className="nav-link" href="#">Power Automate</a>
          </li>
          <li className="nav-item" id='sharePoint'>
            <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">SharePoint</a>
          </li>
          <li className="nav-item" id='web'>
            <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Web</a>
          </li>
        </ul>
        </div>
        <div className='row skills'>


        </div>
      </div>
    </div>
  );
}

export default App;
