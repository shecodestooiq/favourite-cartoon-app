import React, { useState, useContext } from "react";
import CartoonCard from "./CartoonCard";
import { CartoonContext } from "../CartoonProvider";

function CartoonsList({ filterBy }) {
  const { cartoons, setCartoons } = useContext(CartoonContext);

  const filteredCartoons = filterBy
    ? cartoons.filter((cartoon) =>
        cartoon.name.toLowerCase().includes(filterBy.toLowerCase())
      )
    : cartoons;

  const cartoonsAreNotEmpty = filteredCartoons.length !== 0;

  return (
    <div className="Cards">
      {cartoonsAreNotEmpty ? (
        <>
          {filteredCartoons.map((cartoon, index) => {
            return (
              <CartoonCard
                name={cartoon.name}
                img={cartoon.img}
                index={index}
                isFavourite={false}
              />
            );
          })}
        </>
      ) : (
        <>
          <center>
            <h1>No cartoons was found :(</h1>
          </center>
        </>
      )}
    </div>
  );
}

export default CartoonsList;
