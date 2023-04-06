import React, { useState } from "react";
import Layout from "../../../Components/Layouts/Layout";
import "./Signup.css";
const Signup = () => {
    const [input, setInput] = useState({
        name : '',
        email : '',
        password : '',
        phone : '',
        address : '', 
    })

    // update input state on change
    const handleInputChange = (e) => {
        setInput((prev) => ( {
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

  return (
    <div>
      <Layout>
        <div className="sign-up-wrapper">
          <div className="sign-up-box shadow-sm">
            <h2 className="text-center">Sign Up</h2>
            {/* Form Start */}

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Your Name
              </label>
              <input
                value={input.name}
                onChange={handleInputChange}
                name='name'
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="username"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                value={input.email}
                onChange={handleInputChange}
                name='email'
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
                value={input.password}
                onChange={handleInputChange}
                name='password'
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Password"
              />
            </div>
            <div class="mb-3">
              <button className="btn btn-primary w-100">Sign Up</button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Signup;
