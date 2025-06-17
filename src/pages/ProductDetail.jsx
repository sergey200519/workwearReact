import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../data/products.json";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.product_id === id);
    setProduct(foundProduct);
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар добавлен в корзину");
  };

  if (!product) return <div>Товар не найден</div>;

  const imageUrl = product.image
    ? product.image.replace("https://specodegda.ru", "https://www.specodegda.ru/")
    : "/photo.png";

  return (
    <div className="product-detail">
      <img src={imageUrl} alt={product.name} width="300" />
      <h2>{product.name}</h2>
      <p>{product.price_retail} ₽</p>
      <p>{product.state}</p>
      <p>{product.description}</p>

      <button onClick={addToCart}>Добавить в корзину</button>

      <h4>Особенности:</h4>
      <ul>
        {product.features?.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <h4>Защитные свойства:</h4>
      <ul>
        {product.protection?.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h4>Документы:</h4>
      <ul>
        {product.documents?.map((doc, i) => (
          <li key={i}>
            <a href={doc.url} target="_blank" rel="noreferrer">
              {doc.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
