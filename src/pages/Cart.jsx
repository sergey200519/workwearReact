import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const remove = (id) => {
    const updated = cart.filter(p => p.product_id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div>
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        cart.map((item) => (
          <div key={item.product_id}>
            <h3>{item.name}</h3>
            <p>{item.price_retail} ₽</p>
            <button onClick={() => remove(item.product_id)}>Удалить</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
