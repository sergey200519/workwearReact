import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const imageUrl = product.image
    ? product.image.replace("https://specodegda.ru", "https://www.specodegda.ru/")
    : "/photo.png";

  return (
    <div className="card">
      <Link to={`/product/${product.product_id}`}>
        <img src={imageUrl} alt={product.name} width="150" />
        <h3>{product.name}</h3>
      </Link>
      <p>{product.price_retail} ₽</p>
      <p>{product.state}</p>
      <button onClick={addToCart}>Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;
