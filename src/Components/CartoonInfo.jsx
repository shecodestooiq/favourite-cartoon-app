import React, { useState } from 'react';
import "../styles.css"
import heart from "./heart.png"
import heartless from "./heartless.png"

export default function CartoonInfo({ cartoon }) {
  const [fav, setFav] = useState(false);

  const Addfav=()=>{
    setFav(true);
  }
  return <div className='cartoons'>{cartoon}
     <p>{fav? <img src={heart} style={{width:"50px",height:"50px"}}/>:<img src={heartless} style={{width:"50px",height:"50px"}}/>}</p>
   <button onClick={Addfav}>Add to favorite</button>
   <button onClick={()=>{setFav(false)}}>Remove from favorite</button>

  </div>;
}
