import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProductList } from "../../../redux";

const ProductsContainer = () => {
  const products = useSelector((state) => state.update.productList);
  return (
    <div className='products-container px-5 mt-5'>
      <p className='heading'>Latest Products</p>
      <div className='search-bar-container d-flex align-items-center'>
        <form action=''>
          <label htmlFor='search'>Search for products</label>
          <div className='input-container mt-2 center'>
            <input type='text' name='search' id='text' />
            <button type='submit'>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M13.4741 15L8.36612 9.89306C7.25076 10.6288 5.90205 10.9246 4.58116 10.723C3.26026 10.5214 2.06118 9.83676 1.2161 8.80175C0.371016 7.76674 -0.0599261 6.45496 0.00672014 5.12043C0.0733664 3.7859 0.63286 2.52358 1.57685 1.57792C2.52234 0.63357 3.78466 0.07371 5.1193 0.00677685C6.45394 -0.0601563 7.76593 0.370601 8.80116 1.21562C9.83639 2.06063 10.5212 3.25977 10.7229 4.58078C10.9246 5.90179 10.6289 7.25065 9.89306 8.36612L14.9989 13.4752L13.4741 15ZM5.39153 2.15655C4.53328 2.15598 3.70995 2.49638 3.10267 3.10285C2.49539 3.70933 2.15391 4.5322 2.15334 5.39045C2.15277 6.24871 2.49317 7.07203 3.09964 7.67931C3.70612 8.28659 4.52899 8.62807 5.38724 8.62864C5.81221 8.62892 6.23307 8.5455 6.62579 8.38313C7.01851 8.22077 7.37541 7.98264 7.6761 7.68234C7.9768 7.38205 8.2154 7.02547 8.37828 6.63296C8.54117 6.24045 8.62515 5.8197 8.62543 5.39474C8.62571 4.96978 8.54229 4.54892 8.37992 4.1562C8.21756 3.76347 7.97943 3.40658 7.67913 3.10588C7.37884 2.80519 7.02226 2.56659 6.62975 2.4037C6.23724 2.24081 5.81649 2.15683 5.39153 2.15655Z'
                  fill='#345995'
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductsContainer;
