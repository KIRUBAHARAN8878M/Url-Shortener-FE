import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../config";

function Register() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      active: false,
      URLs: [],
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const register = await axios.post(`${config.api}/register`, values);
        alert(register.data.message);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
   
    <div className="container login ">
      <span className="row d-flex align-content-center justify-content-center ">
        <span className="col-lg-4 col-md-6 col-sm-9 pt-5 ">
          <div className="card o-hidden border-0 shadow-lg  mt-3  bg-transparent pt-5 d-flex align-content-center">
            <div className="card-body p-2">
              <div className="row">
                <div className="col-lg-9 mx-auto">
                  <div className="p-0">
                    <div className="  text-center pb-5">
                      <h4 className="p-2 bg-warning border-light text-light rounded">Welcome To Register Page!</h4>
                    </div>

                    <form className="user" onSubmit={formik.handleSubmit}>
                      <div className="form-group pb-3">
                        <input
                          className={"form-control "}
                          id="username"
                          type={"text"}
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          name="username"
                          placeholder="Enter username"
                        />
                      </div>
                      <div className="form-group pb-3">
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          placeholder="Enter Your Email..."
                        />
                        <div id="emailHelp" class="form-text">
                          We'll never share your email with anyone else.
                        </div>
                      </div>
                      <div className="form-group pb-4">
                        <input
                          className={"form-control "}
                          id="exampleInputPassword"
                          type={"password"}
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          placeholder="Password"
                          name="password"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-outline-dark container fw-bold myname"
                      >
                        REGISTER
                      </button>
                    </form>

                    <div className="text-center fw-bold mt-2 pt-2 pb-4">
                      <p>
                        Already have an Account ?<Link to={"/"}> Login</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    </div>
  );
}

export default Register;
