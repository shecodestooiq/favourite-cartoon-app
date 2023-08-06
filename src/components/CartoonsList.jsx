import React from "react";
import { cartoons } from "./data";
import CartoonCard from "./CartoonCard";

function CartoonsList({ filterBy }) {
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
              />
            ))}
        </>
      )}
    </div>
  );
}

export default CartoonsList;
