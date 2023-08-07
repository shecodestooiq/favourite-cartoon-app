import React, { useState, useContext } from "react";
import CartoonCard from "./CartoonCard";
import { CartoonContext } from "../CartoonProvider";

function CartoonsList({ filterBy }) {
  const { cartoons, setCartoons } = useContext(CartoonContext);

  return (
    <div className="Cards">
      {filterBy === null ? (
        <>
          {cartoons.map((cartoon, index) => {
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
          {cartoons
            .filter((cartoon) =>
              cartoon.name.toLowerCase().includes(filterBy.toLowerCase())
            )
            .map((cartoon, index) => (
              <CartoonCard
                name={cartoon.name}
                img={cartoon.img}
                index={index}
                isFavourite={false}
              />
            ))}
        </>
      )}
    </div>
  );
}

export default CartoonsList;
