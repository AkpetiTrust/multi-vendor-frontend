import React from "react";

const Preloader = () => {
  return (
    <div className='preloader'>
      <div className='divider'>
          <div></div>
          <div></div>
      </div>
      <div className='preloader-main'>
          <h2><span>Buy,</span></h2>
          <h2><span>Sell,</span></h2>
          <h2><span>Connect.</span></h2>
      </div>
    </div>
  );
};

export default Preloader;
