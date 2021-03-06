import { React, useState } from "react";
import Button from "../../../components/Button";

const Createaccount = ({ onClick }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className='create-account-form'>
      <form action=''>
        <div className='create-account-form-group'>
          <div>
            <label htmlFor='name'>Full Name:</label>
            <input type='text' name='name' id='name' autoFocus />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' id='email' />
          </div>
        </div>
        <div className='create-account-form-group'>
          <div>
            <label htmlFor='number'>Phone Number:</label>
            <input type='text' name='number' id='number' />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' id='password' />
          </div>
        </div>
        <Button text='CREATE ACCOUNT' loading={loading} type='submit' />
        <p className='switch'>
          Already have an account?{" "}
          <span className='login-span' onClick={onClick}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Createaccount;
