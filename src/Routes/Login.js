import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../config";
// import UserContext from "./usercontext";

function Login() {
  //   let contextData = useContext(UserContext);
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
        // contextData.setUserName(values.username);
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
    <div className="container">
      <h1 className="text-dark">URL Shortener</h1>
      <div className="col">
        <div className="row">
          <form onSubmit={formik.handleSubmit}>
            <div class="mb-3">
              <label for="username" class="form-label">
                UserName
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <p className="form-label">
                <Link to="/resetpassword"> Forget Password?</Link>
              </p>
            </div>

            <button type="submit" class="btn btn-danger">
              Submit
            </button>

            <div class="mb-3">
              <p class="form-label">
                Don't have account,<Link to="/register">Click here</Link> to
                SignUP
              </p>
            </div>
          </form>
           <div>
            <h2>For Testing:</h2>
            <h3>Username: pavi</h3>
            <h3>Password: 12344</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
