import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <>
    <div className="form-container">
      {/*page title*/}
      <h1 className="from-container">REGISTER</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">full name
          </label>
          <input type="text" id="name" name="name" placeholder="Enter your full name"/>

        </div>
        <div className="form-group">
          <label htmlFor="email">email address
          </label>
          <input type="email" id="email" name="email" placeholder="Enter your email"/>
        </div>

        <div className="form-group">
          <label htmlFor="email">passowrd
          </label>
          <input type="password" id="password" name="password" placeholder="password"/>
        </div>
        <button type="submit" className="btn-primary">Register</button>
      </form>
    </div>
    </>
  )
}

export default Register;