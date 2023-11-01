import React, { useState } from 'react'

const Home = () => {
    
    const cartoonList = ["marooko", "spong pob", "konan", "batman", "the mask"]
    const [cartoon, setCartoon] = useState(cartoonList)
    const [inputone, setInputOne] = useState("")
    const [favorites, setFavorites] = useState([])
    const searchCartoon = (e) => {
        const searchTerm = e.target.value;
        setInputOne(searchTerm)
        const filtered = cartoonList.filter((inputone) =>
            inputone.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
        setCartoon(filtered)

    }
    const addTooFavorite = (inputone) => {
        if (!favorites.includes(inputone)) {
            setFavorites([...favorites, inputone])
            
        }
    }
  return (
      <div>
          <input type='text' value={inputone} onChange={searchCartoon} />
          {cartoon.length > 0
              ? cartoon.map((inputone, index) => (
                  <div key={index}>{inputone}
                      <button onClick={() => addTooFavorite(index)}>Add To Favorits</button>
                      {favorites.includes(inputone)}
                  </div>
              
              ))
        :'Not Found'}
      
    </div>
  )
}

export default Home
