import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const [productsData, setProductsData] = useState([]);
  const [product, setProduct] = useState(null);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    if (product) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setInCart(cart.some((item) => item.product_id === product.product_id));
    }
  }, [product]);

  useEffect(() => {
    fetch("/workwearReact/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (productsData.length) {
      const foundProduct = productsData.find((p) => p.product_id === id);
      setProduct(foundProduct);
    }
  }, [id, productsData]);

  const addToCart = () => {
    onAddToCart(product);
    setInCart(true);
  };

  if (!product) return <div>Товар не найден</div>;

  const imageUrl = product.image
    ? product.image.replace(
        "https://specodegda.ru",
        "https://www.specodegda.ru/"
      )
    : "workwearReact/photo.png";

  return (
    <div className="product-detail">
      <img src={imageUrl} alt={product.name} width="300" />
      <h2>{product.name}</h2>
      <p>{product.price_retail} ₽</p>
      <p>{product.state}</p>
      <p>{product.description}</p>

      <button onClick={addToCart} disabled={inCart}>
        {inCart ? "Уже в корзине" : "Добавить в корзину"}
      </button>

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
      <ul className="documents-list">
        {product.documents?.map((doc, i) => (
          <li key={i}>
            <a
              href={doc.url}
              target="_blank"
              rel="noreferrer"
              className="document-link"
            >
              {doc.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
