import React, { useState } from "react";
import Layout from "../../../Components/Layouts/Layout";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signUpRedux } from "../../../features/users/userSlice";
import { toaster } from "../../../utility/toaster";
const Signup = () => {
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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


    // submit register form
    const handleRegister = async () => {
      try {

        
         await axios.post('http://127.0.0.1:5050/api/v1/user/register', input)
         .then(
          res =>{
            dispatch(signUpRedux(res.data.user))
           
            toaster('succ', res.data.message)
            setTimeout(() => {
              // navigate('/sign-in')
            }, 1000);
          }
         )
         .catch( err => {
          console.log(err);
          toaster('warn', err.response.data.message)
         })
      } catch (error) {
        
          toaster('err', 'Internal Server Error!')
      }
    }
  return (
    <div>
      <Layout>
        <div className="sign-up-wrapper">
          <div className="sign-up-box shadow-sm">
            <h2 className="text-center">Sign Up</h2>
            {/* Form Start */}

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Your Name
              </label>
              <input
                value={input.name}
                onChange={handleInputChange}
                name='name'
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                value={input.email}
                onChange={handleInputChange}
                name='email'
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                value={input.password}
                onChange={handleInputChange}
                name='password'
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Password"
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary w-100" onClick={handleRegister}>Sign Up</button>
            </div>
            <p className="hav-account-link">Already has an account? <Link to={'/sign-in'}>Sign in</Link></p>
         
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Signup;
