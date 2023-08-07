import React, { useContext } from "react";
import CartoonCard from "./CartoonCard";
import { CartoonContext } from "../CartoonProvider";

function FavoriteCartoonsPage() {
  const { cartoons, setCartoons } = useContext(CartoonContext);

  const favoriteCartoons = cartoons.filter((c) => c.isFavourite === true);

  const areThereFavorites = favoriteCartoons.length === 0;

  return (
    <>
      <h2>Your Favorite Cartoons</h2>
      {!areThereFavorites ? (
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
      ) : (
        <center>
          <h1>No favourite cartoons yet</h1>
        </center>
      )}
    </>
  );
}

export default FavoriteCartoonsPage;
