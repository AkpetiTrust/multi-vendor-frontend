import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className='product-card' data-aos='fly-in'>
      <div className='product-image'>
        <img src={product.image} alt='product' className='img-fluid' />
      </div>
      <div className='product-body'>
        <p className='product-name'>{product.name}</p>
        <p>
          <span className='light-text'>PRICE:</span>{" "}
          <span className='price'>N{product.price}</span>
        </p>
        <div className='product-buttons row'>
          <div className='col-8 center justify-content-start'>
            <Link className='details-btn' to='/'>
              VIEW DETAILS <span className='arrow'>&#8594;</span>
            </Link>
          </div>
          <div className='col-4 center justify-content-end'>
            <Link className='cart-btn' to='/'>
              <svg
                width='30'
                height='30'
                viewBox='0 0 43 43'
                fill='none'
                className='img-fluid'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M18.8125 37.625C20.2968 37.625 21.5 36.4218 21.5 34.9375C21.5 33.4532 20.2968 32.25 18.8125 32.25C17.3282 32.25 16.125 33.4532 16.125 34.9375C16.125 36.4218 17.3282 37.625 18.8125 37.625Z'
                  fill='#345995'
                />
                <path
                  d='M31.3542 37.625C32.8384 37.625 34.0417 36.4218 34.0417 34.9375C34.0417 33.4532 32.8384 32.25 31.3542 32.25C29.8699 32.25 28.6667 33.4532 28.6667 34.9375C28.6667 36.4218 29.8699 37.625 31.3542 37.625Z'
                  fill='#345995'
                />
                <path
                  d='M37.625 12.5417H13.1401L11.0725 7.57876C10.8011 6.92506 10.3417 6.36665 9.75258 5.97432C9.16345 5.582 8.47111 5.37341 7.7633 5.37501H3.58334V8.95834H7.76509L16.263 29.3565C16.5407 30.023 17.1946 30.4583 17.9167 30.4583H32.25C32.9971 30.4583 33.6654 29.9943 33.9288 29.2973L39.3038 14.964C39.4045 14.6927 39.4382 14.4012 39.402 14.1141C39.3658 13.827 39.2609 13.5529 39.0961 13.3151C38.9312 13.0773 38.7114 12.8828 38.4553 12.7481C38.1992 12.6134 37.9144 12.5426 37.625 12.5417V12.5417ZM30.4583 23.2917H26.875V26.875H23.2917V23.2917H19.7083V19.7083H23.2917V16.125H26.875V19.7083H30.4583V23.2917Z'
                  fill='#345995'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
