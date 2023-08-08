import { useState } from "react";
import { ReactComponent as HeartFilled } from "../assets/heart-filled.svg";
import { ReactComponent as HeartOutline } from "../assets/heart-outline.svg";


function CartoonList() {

    const initList = [
        { name: "Avatar: The Last Airbender", isFavorite: false },
        { name: "Avatar: The Legend of Korra", isFavorite: true },
        { name: "Castlevania", isFavorite: true },
        { name: "The Dragon Prince", isFavorite: false },
        { name: "Fairy Odd Parents", isFavorite: false },
        { name: "Martin Mystery", isFavorite: false },
        { name: "Batman: The Animated Series", isFavorite: false },
        { name: "Harley Quinn", isFavorite: false },
        { name: "Psycho pass", isFavorite: true },
        { name: "Vox Machina", isFavorite: true },
    ];


    const [cartoonsList, setCartoonList] = useState(initList);  //Makes Cartoon List visible
    const [searchTerm, setSearchTerm] = useState(''); //holding the input variable


    function searchCartoon(e) {
        const searchysearch = e.target.value;
        setSearchTerm(searchysearch);
        setCartoonList(initList.filter((item) => item.name.toLowerCase().includes(searchysearch.toLowerCase())));
    }

    const handleFavoriteToggle = (name) => {
        setCartoonList((currentCartoon) =>
            currentCartoon.map((cartoon, i) =>
                cartoon.name === name ? { ...cartoon, isFavorite: !cartoon.isFavorite } : cartoon
            )
        );
    };

    return (<div className="cartoons-render">
        <input id="search-bar" type="text" placeholder="Search Cartoon"
            onChange={
                (e) => searchCartoon(e)}
        >
        </input>
        {cartoonsList.map((cartoon, index) => (
        <div className="cartoon-card">
                <h1 id="cartoon-name">{cartoon.name}</h1>
                <button id="favorite-button" onClick={() => handleFavoriteToggle(cartoon.name)}>
                    {cartoon.isFavorite ? <HeartFilled width={24} height={24} /> : <HeartOutline width={24} height={24} />}
                </button>
        </div>
        ))}
    </div>);
}

export default CartoonList;