import React, { useState } from 'react'
import conan from '../assets/conan.jpg'
import georgie from '../assets/georgie.jpg'
import mybrother from '../assets/mybrother.jpg'
import remi from '../assets/remi.jpg'
import romeo from '../assets/romeo.jpg'
import sarah from '../assets/sarah.jpg'
import slamdunk from '../assets/slamdunk.jpg'
import snowwhite from '../assets/snowwhite.jpg'
import tangled from '../assets/tangled.jpg'
import tinkerbell from '../assets/tinkerbell.jpg'
import Cards from './Cards'

export default function CartoonList() {
  const list=[{
    id:1,
    name:'Tinkerbell',
    img:tinkerbell,
    fav:false,
    },
    {
      id:2,
    name:'Princess Sarah',
    img:sarah,
    fav:true,
    },
    {
      id:3,
      name:'Detective Conan',
    img:conan,
    fav:true,},
    {
      id:4,
      name:'Tangled',
      img:tangled,
      fav:false,} ,
    {
      id:5,
      name:'Snow white',
    img:snowwhite,
    fav:false,
  },
    {
      id:6,
      name:'Remi',
    img:remi,
    fav:false,},
    {
      id:7,
      name: 'Romeo and the black brothers',
    img:romeo,
    fav:true,},
    {
      id:8,
      name:'Me & my brother',
    img:mybrother,
    fav:true,
  },
    {
      id:9,
      name:'Lady georgie',
    img:georgie,
    fav:false,
  },
    {
      id:10,
      name:'Slam dunk',
    img:slamdunk,
    fav:false,}
  ]


  const [cartoons, setCartoons] = useState(list);
  const [cartoon, setCartoon] = useState("");

  const searchCartoon = (e) => {
    const searchTerm = e.target.value;
    setCartoon(searchTerm);
    const filteredCartoons = list.filter((cartoon) =>
      cartoon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCartoons(filteredCartoons);
  };

///
return (
  <div className='cartoon-list'>
    <input
      type="text"
      value={cartoon}
      onChange={searchCartoon}
      className="searchInput"
      placeholder="Search"
    />
     <Cards card={cartoons} />
    </div>
  );
}

 
