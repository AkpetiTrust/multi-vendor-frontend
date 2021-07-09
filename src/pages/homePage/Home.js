import { React, useEffect } from "react";
import Preloader from "./components/Preloader";
import Main from "./components/Main";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <Preloader />
      <Main />
    </div>
  );
}

export default Home;
