import { useState } from "react";
const Home = () => {
    const initList=["Konan","Pokimons","Sandibel"]
    const [cartoons,setCartoons]=useState(initList)
    const [inputcartoon , setInputCartoon]=useState("")
    const [favorites,setFavorite]=useState([])
    const searchCartoon =(e) =>{
      const searchTerm= e.target.value;
      setInputCartoon(searchTerm);
      const filtered=initList.filter((inputcartoon)=>
      inputcartoon.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      ); 
      setCartoons(filtered)


    }
    const addTooFavorite = (inputcartoon) => {
      if (! favorites.includes(inputcartoon)){
        setFavorite([...favorites,inputcartoon])
      }
    }
    return (
      <div>
       <input type="text" value={inputcartoon} onChange={searchCartoon} /> 
       {cartoons.length > 0
       ?cartoons.map((inputcartoon,index)=>(
        <div key={index}>{inputcartoon}
        <button onClick={()=>addTooFavorite(inputcartoon)}>Add to favorite</button>
        {favorites.includes(inputcartoon) && <span>❤</span> }
         </div>
       ) ) 
      :'Not found'}
      </div>
    )
  }
  
  export default Home;
