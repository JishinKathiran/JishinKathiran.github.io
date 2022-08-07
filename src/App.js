import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './pages/blog'
import 'bootstrap/dist/css/bootstrap.css';
import linkedIn from './asset/img/linkedIn.png'
import gtiImage from './asset/img/gti.png'

function App() {
  let language =['HTML', 'CSS', 'JavaScript', 'React JS', 'Python', 'C++', 'Node JS', 'Power Fx', 'PowerShell'];
  let tootls = ['VS Code', 'Git', 'DevOps', 'Share Gate']
  return (
    <div className="App">

      <div className='container mainContent px-5 pb-5'>

        <div className='row pt-5'>
            <h1 className=' title'>Jishin Kathiran  <a href='https://www.linkedin.com/in/jishinkathiran/' target='_blank'><img src={linkedIn} width='45'/></a> <a href='https://www.linkedin.com/in/jishinkathiran/' target='_blank'><img src={gtiImage} width='50' /></a> </h1>
            <p className='des'>SharePoint and PowerPlatform developer </p>
        </div>
        <div className='row d-flex' id='navRow'>
        <ul className="nav">
          <li className="nav-item mb-3" id='spfx'>
            <a className="nav-link active" aria-current="page" href="#">SPFx</a>
          </li>
          <li className="nav-item mb-3" id='powerApps'>
            <a className="nav-link" href="#">PowerApps </a>
          </li>
          <li className="nav-item mb-3" id='powerAuto'>
            <a className="nav-link" href="#">Power Automate</a>
          </li>
          <li className="nav-item mb-3" id='sharePoint'>
            <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">SharePoint</a>
          </li>
          <li className="nav-item mb-3" id='web'>
            <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Web</a>
          </li>
        </ul>
        </div>
        <div className='row pt-4 pb-2'>
            <h3 className='fs-4 fw-light'>#Language of internet</h3>
        </div>
        <div className='row skills'>
            <div className='d-flex flex-wrap'>
              {
                  language.map(lan =>{
                    return(
                      <span className='roundShape px-2'>
                        <p style={{color:'#2e2e38'}}>{lan}</p>
                      </span>
                    )
                  })
              }
            </div>
        </div>
        <div className='row pt-2'>
            <h3 className='fs-4 fw-light'>#Tools</h3>
        </div>
        <div className='row skills'>
            <div className='d-flex flex-wrap'>
            {
                  tootls.map(too =>{
                    return(
                      <span className='roundShape px-2'>
                        <p style={{color:'#2e2e38'}}>{too}</p>
                      </span>
                    )
                  })
              }
       
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
