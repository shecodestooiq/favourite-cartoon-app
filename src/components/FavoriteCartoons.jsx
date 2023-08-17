import { useState } from "react";
export default function FavoriteCartoons ({ cartoon }){

    const [favCartoon, setFavCartoon] = useState('♡');
    const [showButton, setShowButton] = useState(true);
    const [favText, setFavText] = useState('');

    const favoriteCartoon = ()=>{
        setFavCartoon('❤️');
        setFavText('My Favorite One!')
        setShowButton(!showButton)
    }

    return(
        <>
            <>
                {cartoon.favorite ?
                    <><p>❤️</p> <p>My Favorite One!</p></>
                :   <>
                        <p>{favCartoon}</p>
                        <div>
                            <p className="favText">{favText}</p>
                            {showButton && <button onClick={favoriteCartoon}>⭐️ Mark As Favorite</button>}
                        </div>
                        
                    </>
                }
            </>
        </>
        
    );
}