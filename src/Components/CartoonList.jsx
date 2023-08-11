import React, { useState } from 'react';
import CartoonInfo from './CartoonInfo';

export default function CartoonsList() {
  const initalList = [
    'The Last Airbender',
    'Ben 10',
    'Hey Arnold',
    'Phineas and Ferb',
  ];
  const [cartoons, setCartoons] = useState(initalList);
  const [cartoon, setCartoon] = useState('');

  const searchCartoon = (e) => {
    const searchTerm = e.target.value;
    setCartoon(searchTerm);
    const filtered = initalList.filter((cartoon) =>
      cartoon.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCartoons(filtered);
  };
  return (
    <div>
      <div className='input'>
      <h1>My Cartoon List</h1>
      <input name='cartoon' value={cartoon} onChange={searchCartoon}/>
      </div>
      
      <div className='List'>
      {cartoons.length > 0
        ? cartoons.map((cartoon, index) => (
            <CartoonInfo key={index} cartoon={cartoon} />
            
          ))
        : 'No Cartoon found'}
      </div>
      
    </div>
  );
}
