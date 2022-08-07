import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './pages/blog'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">

      <div className='container mainContent'>

        <div className='row pt-5'>
            <h1>Jishin Kathiran</h1>
            <p>SharePoint and PowerPlatform developer</p>
        </div>
        <div className='row d-flex' id='navRow'>
        <ul class="nav">
          <li class="nav-item" id='spfx'>
            <a class="nav-link active" aria-current="page" href="#">SPFx</a>
          </li>
          <li class="nav-item" id='powerApps'>
            <a class="nav-link" href="#">PowerApsp</a>
          </li>
          <li class="nav-item" id='powerAuto'>
            <a class="nav-link" href="#">Power Automate</a>
          </li>
          <li class="nav-item" id='sharePoint'>
            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">SharePoint</a>
          </li>
          <li class="nav-item" id='web'>
            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Web</a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
