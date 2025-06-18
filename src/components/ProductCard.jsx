import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setInCart(cart.some((item) => item.product_id === product.product_id));
  }, [product.product_id]);

  const addToCart = () => {
    if (!inCart) {
      onAddToCart(product);
      setInCart(true); // обновляем локальное состояние
    }
  };

  const imageUrl = product.image
    ? product.image.replace("https://specodegda.ru", "https://www.specodegda.ru/")
    : "/workwearReact/photo.png";

  return (
    <div className="card">
      <Link to={`/product/${product.product_id}`}>
        <img src={imageUrl} alt={product.name} width="150" />
        <h3>{product.name}</h3>
      </Link>
      <p>{product.price_retail} ₽</p>
      <p>{product.state}</p>
      <button onClick={addToCart} disabled={inCart}>
        {inCart ? "Уже в корзине" : "Добавить в корзину"}
      </button>
    </div>
  );
};

export default ProductCard;
