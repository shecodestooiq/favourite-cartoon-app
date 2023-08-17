import { useState } from "react";
import CartoonCards from "./CartoonCards";
import remi from "../assets/images/remi.jpg";
import babyMe from "../assets/images/me-and-mybrother1.jpg";
import secretGarden from "../assets/images/secret-garden1.jpg";
import princessSarah from "../assets/images/princess-sarah.jpg";
import romeo from "../assets/images/romeo.jpg";
import rail from "../assets/images/rail-of-the-star.jpg";
import sindbad from "../assets/images/sindbad.jpg";
import conan from "../assets/images/conan.jpg";
import kayokosDiary from "../assets/images/kayokos-diary.jpg";
import emily from "../assets/images/emily.jpg";

export default function CartoonsList() {
  const initialList = [
    {
      id: 1,
      name: "Remi the Homeless Girl",
      favorite: false,
      img: remi,
    },
    {
      id: 2,
      name: "Baby & Me",
      favorite: true,
      img: babyMe,
    },
    {
      id: 3,
      name: "The Secret Garden",
      favorite: false,
      img: secretGarden,
    },
    {
      id: 4,
      name: "Princess Sarah",
      favorite: false,
      img: princessSarah,
    },
    {
      id: 5,
      name: "Romeo and the Black Brothers",
      favorite: true,
      img: romeo,
    },
    {
      id: 6,
      name: "Rail Of The Star",
      favorite: false,
      img: rail,
    },
    {
      id: 7,
      name: "Sindbad Adventures",
      favorite: false,
      img: sindbad,
    },
    {
      id: 8,
      name: "Meitantei Conan",
      favorite: true,
      img: conan,
    },
    {
      id: 9,
      name: "Kayoko's Diary",
      favorite: true,
      img: kayokosDiary,
    },
    {
      id: 10,
      name: "Emily of New Moon",
      favorite: false,
      img: emily,
    },
  ];
  const [cartoons, setCartoons] = useState(initialList);
  const [cartoon, setCartoon] = useState("");

  const searchCartoon = (e) => {
    const searchTerm = e.target.value;
    setCartoon(searchTerm);
    const filteredCartoons = initialList.filter((cartoon) =>
      cartoon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCartoons(filteredCartoons);
  };

  return (
    <>
      <input
        type="text"
        value={cartoon}
        onChange={searchCartoon}
        className="searchInput"
        placeholder="Search"
      />
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
