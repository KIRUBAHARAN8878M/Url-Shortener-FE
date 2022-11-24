import React from "react";
import { config } from "../config";
import { useFormik } from "formik";
import axios from "axios";

function Passwordreset() {
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${config.api}/resetpassword`, values);
      alert(user.data.message);
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-8 mx-auto pt-5">
          <form onSubmit={formik.handleSubmit}>
            <div class="mb-3 pt-5">
              <label for="exampleInputEmail1" class="form-label fw-bold fs-4">
                Enter mail address to confirm
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder='Please enter valid email address to confirm'
              />
            </div>

            <button type="submit" class="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Passwordreset;
