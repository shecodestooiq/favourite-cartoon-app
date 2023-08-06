import React, { useState } from "react";
import icon from "../images/love.png";
import filledIcon from "../images/heart (1).png";

import { ToastContainer, toast } from 'react-custom-alert';


function CartoonCard(props) {
  const { index, name, img } = props;
  const [clicked, setClicked] = useState(false);

 
  const alertSuccess = () => toast.success('success');

  const handleClick = () => {
    
    setClicked(!clicked);
  };

  return (
    <div
      key={index}
      className="card"
      style={{ backgroundImage: `url(${img})` }}
    >
      <img src={img} alt="" />
      <div className="card-info">
        <h3>{name}</h3>
        <img
          src={clicked ? filledIcon : icon}
          alt=""
          className={`icon ${clicked ? 'icon-clicked' : ''}`}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default CartoonCard;
