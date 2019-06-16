import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : { className: "header-link" };
};

function App() {
  return (
    <Root>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav> */}
      <header className="header">
        <h1 className="header-h1">React-Static & Cosmic JS blog</h1>
        <nav className="header-nav">
          <Link getProps={isActive} className="header-link" to="/">
            Home
          </Link>
          <Link getProps={isActive} className="header-link" to="/about">
            About
          </Link>
        </nav>
    </header>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <div className="footer">
        <span>Powered by </span>
          <img 
              alt="react-static" 
              src="https://raw.githubusercontent.com/nozzle/react-static/master/media/react-static-emblem.png"
              className="footer-logo"
          />
          <a style={{color:"#191919"}} href="https://react-static.js.org/">
              React-Static
          </a>
        <span> and </span>
        <img 
              alt="cosmicjs" 
              src="https://web-assets.cosmicjs.com/images/logo.svg"
              className="footer-logo"
          />
          <a style={{color:"#191919"}} href="https://cosmicjs.com/">
              Cosmic JS
          </a>
        </div>         
    </Root>
  )
}

export default App
