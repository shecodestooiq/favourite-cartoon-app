import React, { useContext } from "react";
import CartoonCard from "./CartoonCard";
import { CartoonContext } from "../CartoonProvider";

function FavoriteCartoonsPage() {
  const { cartoons, setCartoons } = useContext(CartoonContext);

  let favoriteCartoons = cartoons.filter((c) => c.isFavourite === true);

  return (
    <>
      <h2>Your Favorite Cartoons</h2>
      <div className="Cards">
        {favoriteCartoons.map((cartoon, index) => (
          <CartoonCard
            index={index}
            name={cartoon.name}
            img={cartoon.img}
            isFavourite={true}
          />
        ))}
      </div>
    </>
  );
}

export default FavoriteCartoonsPage;
