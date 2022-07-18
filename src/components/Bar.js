import React from 'react'
import logo from '../assets/images/logo.png'
import '../assets/styles/Bar.css'
import home from '../assets/images/fi_home.svg'
import truck from '../assets/images/fi_truck.svg'

const Bar = () => {
  return (
    <div>
        <header class="header bg-light" id="header">
        <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light m-0 p-0">
            <div class=" container-xl">
            <div class="rectangel-logo">
                <a class="navbar-brand" href="#"></a>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item p-2">
                    <form class="d-flex justify-content-center">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg height="36" width="36">
                        <circle cx="18" cy="18" r="18" fill="#CFD4ED" />
                        <text x="50%" y="50%" text-anchor="middle" stroke="black" stroke-width="1px" dy=".3em">U</text> 
                    </svg> 
                    Unis Badri
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </header>
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
        <div className="main-menu list-add-new-car top-0 start-0">
          <div className="main-menu-rectangle mt-3 mx-auto"></div>
          <div className="home text-center mt-3">
            <img
              src={home}
              alt=""
              width="24"
              height="24"
              className="d-block mx-auto"
            />
            <p className="text-white mt-1 fw-bold">Home</p>
          </div>
          <div className="car text-center mt-3">
            <img
              src={truck}
              alt=""
              width="24"
              height="24"
              className="d-block mx-auto"
            />
            <p className="text-white mt-1 fw-bold">Car</p>
          </div>
        </div>   
        </nav>
        <div className="side-bar list-item-add-new-car bg-white">
          <h3>CARS</h3>
          <p>List Car</p>
        </div>
    </div>
    </div>
  )
}

export default Bar