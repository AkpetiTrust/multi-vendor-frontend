import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateShopList } from "../../../redux";
import { Link } from "react-router-dom";
import Store from "./Store";

const StoresContainer = () => {
  const stores = useSelector((state) => state.update.storeList);
  return (
    <div className='stores-container px-5 mt-5'>
      <hr className='mb-5' />
      <p className='heading'>Popular Stores</p>
      <div className='stores-main mt-5'>
        <div className='row g-5'>
          {stores.map((store) => (
            <div className='col-lg-4 col-sm-12 center' key={store.id}>
              <Store store={store} />
            </div>
          ))}
        </div>
        <p className='mt-5 all-stores-link'>
          <Link to='/discover'>
            VIEW ALL STORES &#10230;{" "}
            <span data-content='VIEW ALL STORES &#10230;'></span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StoresContainer;
