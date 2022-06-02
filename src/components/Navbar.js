import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/pagination" className="nav-link" href="#">Pagination</Link>
        </li>
        <li className="nav-item">
          <Link to="/lifecycle" className="nav-link" href="#">LifeCycle Comp</Link>
        </li>
        <li className="nav-item">
          <Link to="/counterfunc" className="nav-link" href="#">Counter Func</Link>
        </li>
        <li className="nav-item">
          <Link to="/funcpagination" className="nav-link" href="#">Func Pagination</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactus" className="nav-link" href="#">ContactUs</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar