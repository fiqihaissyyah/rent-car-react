import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-shadow">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" id="sidebarCollapse"><i className="fa fa-bars"></i></a>
                    </li>
                    </ul>
                    <form className="d-flex me-3">
                    <input className="form-control input-text b-12-l" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-blue-outline b-14-b" type="submit">Search</button>
                    </form>
                    <div className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="profile b-16-b me-1">A</span> Admin BCR
                        <i className="fa fa-chevron-down ms-2"></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="/">Sign Out</a></li>
                        </ul>
                    </li>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar