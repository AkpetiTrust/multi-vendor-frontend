import React from "react";
import { Link } from "react-router-dom";

const Store = ({ store }) => {
  return (
    <div className='store-card'>
      <div className='image' data-aos='scale-in'>
        <img src={store.img} alt={store.name} />
      </div>
      <p className='name'>{store.name}</p>
      <p className='owner'>By {store.owner}</p>
      <Link className='mt-5 view-store' to='/'>
        VIEW STORE
      </Link>
    </div>
  );
};

export default Store;
