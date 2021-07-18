import style from "./alert.module.css";
import { useState } from "react";

const Alert = ({ information, activeProp, danger }) => {
  const [active, setActive] = useState(activeProp);

  let className = `${style.my_alert} ${active ? style.active : ""} ${
    danger ? style.danger : ""
  }`;

  return (
    <div className={className}>
      <div className={style.close} onClick={() => setActive(false)}>
        &#10006;
      </div>
      <p>{information}</p>
    </div>
  );
};

export default Alert;
