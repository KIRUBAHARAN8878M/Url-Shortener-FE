import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../config";


function Login() {
  
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        const user = await axios.post(`${config.api}`, values);
        localStorage.setItem("react_app_token", user.data.token);
        alert(user.data.message);
      
        if (user.data.message === "Successfully Logged In!!") {
          if (user.data.active === true) {
            navigate("/dashboard");
          } else {
            alert(
              "Your account is not activated. Please Activate your account"
            );
          }
        } else {
          alert("User not found");
        }
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
                    <h4 className="p-2 bg-warning border-light text-light rounded">
                      Welcome To Login Page!
                    </h4>

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
                    <p className="form-label">
                 <Link to="/resetpassword" className='text-light'> Forget Password?</Link>
               </p>

                    <button
                      type="submit"
                      className="btn btn-outline-dark container fw-bold myname"
                
                    >
                      LOGIN
                    </button>
                  </form>

                  <div className="text-center fw-bold mt-2 pt-2 pb-4">
                    <p>
                      Don't have an Account ? 
                      <Link to={"/register"} className='text-light'> Register</Link>
                    </p>
                  </div>
          <div className="text-center p-2 bg-dark text-light fw-bold rounded-circle">
            <h2>For Testing:</h2>
            <h3>Username: Kumar</h3>
            <h3>Password: 1234</h3>
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

export default Login;
