import React from "react";
import HeroContent from "./HeroContent";
import ScrollDiv from "./ScrollDiv";
import ProductsContainer from "./ProductsContainer";
import Navbar from "../../../components/Navbar";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className='main'>
      <div className='hero px-5'>
        <Link to='/' className='logo'>
          <img src={logo} alt='' className='img-fluid' />
        </Link>
        <Navbar />
        <HeroContent />
      </div>
      <ScrollDiv />
      <ProductsContainer />
    </div>
  );
};

export default Main;
