import { useEffect, useState } from "react";

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
    <div className="cart-container">
      <h1 className="cart-title">Корзина</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Корзина пуста</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.product_id}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.price_retail} ₽</p>
            </div>
            <button onClick={() => remove(item.product_id)}>Удалить</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
