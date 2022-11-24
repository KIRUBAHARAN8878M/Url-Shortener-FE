import React from 'react'
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <>
       
       <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand text-light mx-2 fw-bold" href="#">URL SHORTNER APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item ">
          <Link class="nav-link text-light fw-bold " aria-current="page" to={"/dashboard"}>DASHBOARD</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light fw-bold" to={"/enterurl"}>CREATE URL</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light fw-bold" to={"/"}>LOGOUT</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>









        </>
    )
}

export default Sidebar;