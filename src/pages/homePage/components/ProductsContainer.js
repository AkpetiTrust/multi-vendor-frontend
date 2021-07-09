import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProductList } from "../../../redux";

const ProductsContainer = () => {
  const products = useSelector((state) => state.update.productList);
  return (
    <div className='products-container px-5 mt-5'>
      <p className='heading'>Latest Products</p>
    </div>
  );
};

export default ProductsContainer;
