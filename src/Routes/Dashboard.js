import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import { config } from "../config";
function Dashboard() {

  const [data1, setData] = useState([]);
  let getData = async () => {
    try {
      let res = await axios.get(`${config.api}/enterurl`, {
        headers: {
          Authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      setData(res.data);
      console.log(res.data)
      console.log(data1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  let navigate = useNavigate()

  let doLogout = () => {
    localStorage.removeItem('react_app_token');
    navigate('/')
    
  }


  return (
    <>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
          URL Shortener
        </a>
       
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#" onClick={doLogout}>
              Sign out
            </a>
          </div>
        </div>
      </header>

      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="position-sticky pt-3 sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                <Link to={'/dashboard'} class="nav-link active" aria-current="page" href="#">
                    <span data-feather="home" class="align-text-bottom"></span>
                    Dashboard
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={'/enterurl'} class="nav-link" href="#">
                    <span data-feather="file" class="align-text-bottom"></span>
                    Create Your URL
                  </Link>
                </li>
                
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
            </div>
            <div>
              <Card info = {data1}/>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
