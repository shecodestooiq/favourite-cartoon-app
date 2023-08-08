import { useState } from 'react';
// import CartoonsInfo from './CartoonsInfo'
import CartoonCards from './CartoonCards'

export default function CartoonsList (){
    const initialList = [
        {
            id:1,
            name:'Remi the Homeless Girl',
            favorite: false,
            img: require('../assets/images/remi.jpg')
        },
        {
            id:2,
            name:'Baby & Me',
            favorite: true,
            img: require('../assets/images/me-and-mybrother1.jpg')
        },
        {
            id:3,
            name:'The Secret Garden',
            favorite: false,
            img: require('../assets/images/secret-garden1.jpg')
        },
        {
            id:4,
            name:'Princess Sarah',
            favorite: false,
            img: require('../assets/images/princess-sarah.jpg')
        },
        {
            id:5,
            name:'Romeo and the Black Brothers',
            favorite: true,
            img: require('../assets/images/romeo.jpg')
        },
        {
            id:6,
            name:'Rail Of The Star',
            favorite: false,
            img: require('../assets/images/rail-of-the-star.jpg')
        },
        {
            id:7,
            name:'Sindbad Adventures',
            favorite: false,
            img: require('../assets/images/sindbad.jpg')
        },
        {
            id:8,
            name:'Meitantei Conan',
            favorite: true,
            img: require('../assets/images/conan.jpg')
        },
        {
            id:9,
            name:"Kayoko's Diary",
            favorite: true,
            img: require('../assets/images/kayokos-diary.jpg')
        },
        {
            id:10,
            name:'Emily of New Moon',
            favorite: false,
            img: require('../assets/images/emily.jpg')
        }  
    ]
    const [cartoons, setCartoons] = useState(initialList);
    const [cartoon, setCartoon] = useState('');

    const searchCartoon = (e) => {
        const searchTerm = e.target.value;
        setCartoon(searchTerm);
        const filteredCartoons = initialList.filter(cartoon => 
            cartoon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCartoons(filteredCartoons);
    };

    return(
        <>
        <input type="text" value={cartoon} onChange={searchCartoon} className="searchInput" placeholder='Search'/>
        {/* {cartoons.length > 0 ?
            cartoons.map((cartoon,index)=>(
                <>
                    <CartoonsInfo key={index} cartoon={cartoon} />
                </>
            ))
        :
        'No Cartoon Found!'
        } */}
        <CartoonCards cartoonsCard={cartoons} />
        </>
    );
}