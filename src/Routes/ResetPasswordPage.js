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
      <form onSubmit={formik.handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
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
          <label for="exampleInputEmail1" class="form-label">
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
          <label for="exampleInputEmail1" class="form-label">
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
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default ResetPasswordPage;
