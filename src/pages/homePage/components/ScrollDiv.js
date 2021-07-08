import { React, useState, useEffect } from "react";

const ScrollDiv = () => {
  const [translate, setTranslate] = useState(100);

  const updateTranslate = () => {
    if (!document.querySelector(".scroll-div")) {
      return;
    }
    let initialScrollPosition =
      document.querySelector(".scroll-div").getBoundingClientRect().y +
      window.scrollY;
    let percentage =
      ((initialScrollPosition - window.scrollY) / initialScrollPosition) * 100;
    setTranslate(Math.floor(percentage));
  };

  useEffect(() => {
    window.addEventListener("scroll", updateTranslate);
  }, []);
  return (
    <div className='scroll-div mt-4'>
      <div
        className='scroll-inner center'
        style={{ transform: `translateX(${translate}%)`, width: "100%" }}>
        <p>RELIABLE, TESTED, TRUSTED</p>
      </div>
    </div>
  );
};

export default ScrollDiv;
