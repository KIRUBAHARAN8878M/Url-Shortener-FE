import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { config } from "../config";
import { useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      rString: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${config.api}/reset-password-page`, values);
      alert(user.data.message);
      if (user.data.message === "Password reset done") {
        navigate("/");
      }
    },
  });
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-8 mx-auto pt-5">
       <div className="card bg-transparent p-3">
       <div className="  text-center ">
                    <h4 className="p-2 bg-warning border-light text-light rounded">
                      Welcome To Reset password Page!
                    </h4>

                  </div>
       <form onSubmit={formik.handleSubmit}>
        <div class="mb-3 pt-5">
          <label for="exampleInputEmail1" class="form-label fw-bold fs-4">
            Enter Random String
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            name="rString"
            onChange={formik.handleChange}
            value={formik.values.rString}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label fw-bold fs-4">
            Enter Email{" "}
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label fw-bold fs-4">
            Enter New Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputEmail1"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type="submit" class="btn btn-dark ">
          Submit
        </button>
      </form>
       </div>
       
        </div>
         </div>   
        </div>
     
    </>
  );
}

export default ResetPasswordPage;
