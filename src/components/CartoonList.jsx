import React from 'react'
import { useState } from 'react'
import CartoonCard from './CartoonCard';
import './CartoonList.css'
import SearchIcon from './Assets/Icon/Search.png'

const initialList = ['Mr. Bean',
    'Marroco',
    'Slam Dank',
    'Shot',
    'Digimon Adventure'];

const CartoonList = () => {
    const [cartoonList, setCartoonList] = useState(initialList);
    const [cartoonInput, setCartoonInput] = useState('');

    const FindMatch = (e) => {
        const searchTerm = e.target.value;
        setCartoonInput(searchTerm);
        const filtered = initialList.filter((cartoon) =>
            cartoon.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
        setCartoonList(filtered);
    };

    // console.log(cartoonList);
    return (
        <div className='container'>
            <h1> My Favourite Cartoons are : </h1>

            <input className='input'
                placeholder='Search the List'
                name='cartoon'
                value={cartoonInput}
                onChange={FindMatch} />
            <img className='btnSearch' src={SearchIcon} alt='search Icon' />

            {cartoonList.length > 0 ?
                cartoonList.map((cartoon, index) => (
                    <CartoonCard name={cartoon} key={index} />
                )) : 'No Cartoon Found'}

        </div>
    )
};

export default CartoonList;