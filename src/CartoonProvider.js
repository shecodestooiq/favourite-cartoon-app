import React, { createContext, useState } from "react";
import { cartoons as initialCartoons } from "./components/data";

// Create a new context
export const CartoonContext = createContext();

console.log(initialCartoons);



export const CartoonProvider = ({ children }) => {
  const [cartoons, setCartoons] = useState(initialCartoons);

  return (
    <CartoonContext.Provider value={{ cartoons, setCartoons }}>
      {children}
    </CartoonContext.Provider>
  );
};
