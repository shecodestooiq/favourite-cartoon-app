import React, { useState, useContext } from "react";
import icon from "../images/love.png";
import filledIcon from "../images/heart (1).png";
import { CartoonContext } from "../CartoonProvider";

function CartoonCard(props) {
  const { index, name, img, isFavourite } = props;
  const [clicked, setClicked] = useState(false);

  const { cartoons, setCartoons } = useContext(CartoonContext);


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
          src={clicked || isFavourite ? filledIcon : icon}
          alt=""
          className={`icon ${clicked ? "icon-clicked" : ""}`}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default CartoonCard;
