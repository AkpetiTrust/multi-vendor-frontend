import { React, useState } from "react";
import Main from "./components/Main";
import Loginpopup from "./components/Loginpopup";
import Alert from "../../components/alert/Alert";

const Login = () => {
  const [popUpClass, setPopUpClass] = useState("");

  const closePopUp = () => {
    setPopUpClass("");
    document.body.classList.remove("pop-up-active");
  };

  const openPopUp = () => {
    setPopUpClass("active");
    document.body.classList.add("pop-up-active");
  };

  return (
    <div className='login'>
      <Alert
        activeProp={true}
        information='Logged in successfully'
        danger={false}
      />
      <Loginpopup popUpClass={popUpClass} onClick={closePopUp} />
      <Main onClick={openPopUp} />
    </div>
  );
};

export default Login;
