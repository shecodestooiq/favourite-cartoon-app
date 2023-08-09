import React, { useState } from 'react';

function FavButton() {
    const [toggle, setToggle] = useState(false);

    const handleButtonClick = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <button className='btnFav' onClick={handleButtonClick}>
                <p style={{ color: toggle ? 'rgb(255, 42, 141)' : 'white',
                     }}>
                   ❤ 
                </p>
            </button>
        </div>
    );
}

export default FavButton;
