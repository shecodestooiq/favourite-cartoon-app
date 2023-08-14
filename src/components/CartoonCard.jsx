import React from 'react'
import './CartoonCard.css'
import FavButton from './FavButton';

function CartoonCard(props) {
  return (
    <div className='card'>
      {props.name}
      <FavButton/>
    </div>
  )
}

export default CartoonCard;