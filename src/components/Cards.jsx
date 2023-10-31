import React from 'react'
import FavoriteCartoon from './FavoriteCartoon'
export default function Cards({card}) {
  return (
  <>
    <div className='cards'>
        <div className='cartoon-card'>
            {card?.map((cartoon,index) =>
            (
                <div key={index} className='card'>
                    <img src={cartoon.img} alt='pic'/>
                    <div className='cartoon-name'>
                        {" "}
                        <h4>{cartoon.name}</h4>
                    </div>
                    <div className='fav'>
                        <FavoriteCartoon cartoon={cartoon}/>
                    </div>
                </div>
            ))}
        </div>
    </div> 
  </>
  )
}
