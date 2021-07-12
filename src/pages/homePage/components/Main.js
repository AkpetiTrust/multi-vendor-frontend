import React from "react";
import HeroContent from "./HeroContent";
import ScrollDiv from "./ScrollDiv";
import ProductsContainer from "./ProductsContainer";
import StoresContainer from "./StoresContainer";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className='main'>
      <div className='hero px-5'>
        <Link to='/' className='logo'>
          <img src={logo} alt='' className='img-fluid' />
        </Link>
        <Navbar active='1' />
        <HeroContent />
      </div>
      <ScrollDiv />
      <ProductsContainer />
      <StoresContainer />
      <Footer />
    </div>
  );
};

export default Main;
