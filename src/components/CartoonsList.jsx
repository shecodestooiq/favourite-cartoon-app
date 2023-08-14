import React, { useState } from 'react';
import '../index.css';
import CartoonInfo from './CartoonInfo';

const cartoons = [
  {
    cartoonName: 'Avatar: The Last Airbender',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua`,
  },
  {
    cartoonName: 'Generator Rex',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua`,
  }, 
  
  {
    cartoonName: 'Ben 10',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua`,
  },
  {
    cartoonName: 'X-Men',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua`,
  },
  {
    cartoonName: 'Disenchantment',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua`,
  },
  {
    cartoonName: 'Rick and Morty',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua`,
  },
  {
    cartoonName: 'Miraculous Lady Bug',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua`,
  },
  {
    cartoonName: 'Regular Show',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua`,
  },
  
  {
    cartoonName: 'Danny Phantom',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua`,
  },
  {
    cartoonName: 'W.I.T.C.H.',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua`,
  }
];

function CartoonsList() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredCartoons = searchInput.length > 0
    ? cartoons.filter((cartoon) =>
      cartoon.cartoonName.toLowerCase().includes(searchInput.toLowerCase())
    )
    : cartoons;

  const [favourites, setFavourites] = useState([
    'Regular Show',
    'Avatar: The Last Airbender'
  ])
  const handleAddToFavorites = (cartoonName) => {
    if (favourites.includes(cartoonName)) {
      // If the cartoon is already in the favorites list => remove it.
      setFavourites(favourites.filter((name) => name !== cartoonName));
    } else {
      // If the cartoon is not in the favorites list => add it.
      setFavourites([...favourites, cartoonName]);
    }
  };

  return (
    <div className="cartoonsList">
      <h1>My top 10 Cartoons of all time</h1>
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search here"
          onChange={handleSearchChange}
          value={searchInput}
        />
        <div className="cartoon-list">
          {filteredCartoons.length > 0 ? (
            filteredCartoons.map((cartoon) => (
              <CartoonInfo
                key={cartoon.cartoonName}
                cartoonName={cartoon.cartoonName}
                addToFavorites={handleAddToFavorites}
                isFavorite={favourites.includes(cartoon.cartoonName)}
              />
            ))
          ) : (
            <p>No cartoons found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartoonsList;
