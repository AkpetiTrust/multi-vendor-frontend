import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  active = Number(active);
  let i = 1;

  const toggleActive = (e) => {
    document.querySelector(".nav").classList.toggle("active");
    e.currentTarget.classList.toggle("active");
  };

  return (
    <nav className='navbar justify-content-end'>
      <span className='nav-toggler-container center' onClick={toggleActive}>
        <span className='nav-toggler'>
          <span></span>
        </span>
      </span>
      <ul className='nav'>
        <li className='nav-item'>
          <Link
            to='/'
            className={`nav-link ${i === active ? "active" : ""}`}
            data-index={i++}>
            HOME
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/contact'
            className={`nav-link ${i === active ? "active" : ""}`}
            data-index={i++}>
            CONTACT
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/discover'
            className={`nav-link ${i === active ? "active" : ""}`}
            data-index={i++}>
            DISCOVER
          </Link>
        </li>
        <li className='nav-item login-icon'>
          <Link
            to='/login'
            className={`nav-link ${i === active ? "active" : ""}`}
            data-index={i++}>
            <span>LOGIN</span>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              className='img-fluid'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.31778 8.88889L4.5 6.07111L6.07111 4.5L11.5711 10L6.07111 15.5L4.5 13.9289L7.31778 11.1111H0V8.88889H7.31778ZM8.88889 0H17.7778C19 0 20 1 20 2.22222V17.7778C20 19 19 20 17.7778 20H8.88889V17.7778H17.7778V2.22222H8.88889V0Z'
                fill='#345995'
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
