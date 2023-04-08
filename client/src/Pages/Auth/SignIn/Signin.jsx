import React, { useState } from "react";
import Layout from "../../../Components/Layouts/Layout";
import { Link, useNavigate } from "react-router-dom";
import './SignIn.css'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { toaster } from "../../../utility/toaster";
import { loginRedux } from "../../../features/users/userSlice";

const Signin = () => {
  const [input, setInput] = useState({
    email : '',
    password : ''
  })
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setInput( (prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  // handleLogin
  const handleLogin = async () => {
    try {

      if (input.email === '' && input.password === '') {
       return console.log('empty');
      }
      if (input.email === '') {
        return console.log('email');
      }
      if (input.password === '') {
        return console.log('password');
      }
       await axios.post('http://127.0.0.1:5050/api/v1/user/login', input)
       .then(
        res =>{
          dispatch(loginRedux(res.data.user))
          toaster('succ', res.data.message)
          setTimeout(() => {
            navigate('/')
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
            <h2 className="text-center">Sign In</h2>
            {/* Form Start */}

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
              onChange={handleInputChange}
              value={input.email}
              name="email"
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
              onChange={handleInputChange}
              value={input.password}
              name="password"
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Password"
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary w-100" onClick={handleLogin}>Sign In</button>
            </div>
            <p className="hav-account-link">Don't have an account? <Link to={'/sign-up'}>Sign Up</Link></p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Signin;
