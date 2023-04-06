import React from "react";
import Layout from "../../../Components/Layouts/Layout";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <Layout>
        <div className="sign-up-wrapper">
          <div className="sign-up-box shadow-sm">
            <h2 className="text-center">Sign In</h2>
            {/* Form Start */}

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Password"
              />
            </div>
            <div class="mb-3">
              <button className="btn btn-primary w-100">Sign In</button>
            </div>
            <p>Don't have an account? <Link>Sign Up</Link></p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Signin;
