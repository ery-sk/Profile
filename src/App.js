import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <header>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <a className='navbar-brand' href='#'>MyPage</a>
              <button type='button' className='navbar-toggler' data-toggle="collapse" data-target="#Navber" aria-controls="Navber" aria-expanded="false" aria-label="responsive-navbar" >
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="Navber">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li className='nav-item active'>
                          <a className="nav-link" href="#">Profile</a>
                      </li>
                      <li className='nav-item'>
                          <a className="nav-link" href="#">History</a>
                      </li>
                      <li className='nav-item'>
                          <a className="nav-link" href="#">Portfolio</a>
                      </li>
                  </ul>
                  <div className='navbar-nav'>
                      <div className='nav-item'>
                          <a className="nav-link" href="#">Contact</a>
                      </div>
                  </div>
              </div>
          </nav>
      </header>
  );
}

export default App;
