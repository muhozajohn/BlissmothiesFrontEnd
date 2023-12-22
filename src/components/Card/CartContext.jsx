// CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [notificationCount, setNotificationCount] = useState(0);

  const increaseNotificationCount = () => {
    setNotificationCount((prevCount) => prevCount + 1);
  };

 useEffect(() => {
   // Retrieve the notificationCount from localStorage on component mount
   const storedCount = localStorage.getItem("notificationCount");
   if (storedCount) {
     setNotificationCount(parseInt(storedCount, 10));
     console.log(
       "Notification count retrieved from localStorage:",
       storedCount
     );
   }
 }, []); // Run this effect only on component mount

 useEffect(() => {
   // Save the notificationCount in localStorage whenever it changes
   localStorage.setItem("notificationCount", notificationCount.toString());
   console.log("Notification count saved to localStorage:", notificationCount);
 }, [notificationCount]);
  return (
    <CartContext.Provider
      value={{ notificationCount, increaseNotificationCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
