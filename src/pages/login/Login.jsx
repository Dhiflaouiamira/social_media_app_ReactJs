import React from 'react'
import "./login.css"
export default function Login() {
  return (
    <div className='login'>
          <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h3 className='loginLogo'>TrendWave </h3>
                    <span className='loginDesc'/>
                        connect with friends and world arround on TrendWave.
         
          </div>
          <div className='loginRight'>
          <div className='loginBox'>
            <input placeholder='Email'  className='loginInput'/>
            <input placeholder='Password'  className='loginInput'/>
            <button className='loginButton'>Log In</button>
            <span className='loginForgot'>Forgot Password?</span>
            <button  className='loginRegisterButton'>
                Create New Account
            </button>

            </div>
          </div>
          </div>
        Login</div>
  )
}