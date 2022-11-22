import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { config } from "../config";

function ActivateAccount() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
    
      active: true,
      email:''
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const register = await axios.post(`${config.api}/activate-account`, values);
        alert(register.data.message);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div class="mb-3">
          <label for="username" class="form-label">
            Enter your emailID and Click on Button to activate your account
          </label>
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">
            Enter EmailID
          </label>
          <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
        </div>

        <button type="submit" class="btn btn-danger">
          Submit
        </button>
      </form>
    </>
  );
}

export default ActivateAccount;
