import React from 'react';
import '../index.css';

function CartoonInfo({ cartoonName, addToFavorites, isFavorite }) {
  return (
    <div className="cartoon-card">
      <h3>{cartoonName}</h3>
      <button onClick={() => addToFavorites(cartoonName)}>
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

export default CartoonInfo;
