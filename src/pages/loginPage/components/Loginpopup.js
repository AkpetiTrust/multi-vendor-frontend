import { React, useState } from "react";
import instance from "../../../services/axios";

const Loginpopup = ({ onClick, popUpClass }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    let email = e.currentTarget["login-name"].value;
    let password = e.currentTarget["login-password"].value;
    if (!(email && password)) return;
    instance.post("/login", { email, password }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className={`login-popup ${popUpClass}`}>
      <div className={`form ${popUpClass}`}>
        <div className='close' onClick={onClick}>
          <svg
            width='19'
            height='19'
            viewBox='0 0 19 19'
            fill='none'
            className='img-fluid'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.6252 0L9.49916 7.125L2.37479 0L0 2.375L7.12437 9.5L0 16.625L2.37479 19L9.49916 11.875L16.6252 19L19 16.625L11.8756 9.5L19 2.375L16.6252 0Z'
              fill='black'
              fillOpacity='0.67'
            />
          </svg>
        </div>

        <form onSubmit={onSubmit}>
          <p className='title'>Login to your account</p>
          <div className='group'>
            <label htmlFor='login-name'>Name or Email:</label>
            <input type='text' name='login-name' id='login-name' />
          </div>
          <div className='group'>
            <label htmlFor='login-password'>Password:</label>
            <input type='text' name='login-password' id='login-password' />
          </div>
          <button type='submit'>LOGIN</button>
          <p>
            Don’t have an account?{" "}
            <span className='signup-span' onClick={onClick}>
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Loginpopup;
