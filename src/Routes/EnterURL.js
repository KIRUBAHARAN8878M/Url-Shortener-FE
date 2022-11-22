import { Link, useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { config } from "../config";
import axios from "axios";

function EnterURL() {
  const [data1, setData] = useState([]);
  let getData = async () => {
    try {
      let res = await axios.get(`${config.api}/enterurl`, {
        headers: {
          Authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      setData(res.data);
      console.log(res.data);
      console.log(data1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      longURL: "",
      count: 0,
    },
    onSubmit: async (values) => {
      const data = await axios.post(`${config.api}/enterurl`, values, {
        headers: {
          Authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      alert(data.data.message);
      getData();
    },
  });
  let doLogout = () => {
    localStorage.removeItem("react_app_token");
    navigate("/");
  };

  return (
    <>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
          URL Shortener
        </a>
        
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" onClick={doLogout} href="#">
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
                  <Link
                    to={"/dashboard"}
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    <span data-feather="home" class="align-text-bottom"></span>
                    Dashboard
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"/enterurl"} class="nav-link" href="#">
                    <span data-feather="file" class="align-text-bottom"></span>
                    Create Your URL
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Enter Your URL</h1>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your Long URL"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    name="longURL"
                    onChange={formik.handleChange}
                    value={formik.values.longURL}
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="submit"
                    id="button-addon2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="row row-cols-1">
              {data1.map((item) => {
                return (
                  <div
                    class="card text-bg-light mb-3 col m-5"
                    style={{ "max-width": "18rem" }}
                  >
                    <div class="card-header">Click Count:{item.count}</div>
                    <div class="card-body">
                      <h5 class="card-title">
                        <a href={item.shortURL} target={"_blank"}>
                          {item.shortURL}
                        </a>
                      </h5>
                      <p class="card-text">{item.longURL}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default EnterURL;
