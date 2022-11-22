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
      <div className="col">
        <div className="row">
          <form onSubmit={formik.handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
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
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Passwordreset;
