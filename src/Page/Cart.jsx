import React from "react";
import { useCart } from "./context/Cart";

const Cart = () => {
  const cart = useCart();
  const total = cart.items.reduce((a, b) => a + +b.price, 0);
  return (
    <div>
      <h2>Cart</h2>
      {cart &&
        cart.items &&
        cart.items.map((item) => (
          <li>
            {item.name} - {item.price}
          </li>
        ))}
      <h3>Total Bill: ${total}</h3>
    </div>
  );
};

export default Cart;
