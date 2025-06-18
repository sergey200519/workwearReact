import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { filterProducts } from "../utils/filterProducts";

const Home = ({ onAddToCart }) => {
  const [productsData, setProductsData] = useState([]);
  const [filters, setFilters] = useState({
    state: "",
    minPrice: "",
    maxPrice: "",
    query: ""
  });
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    // Загружаем JSON из публичной папки
    fetch("/workwearReact/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
        setFiltered(data); // показываем все изначально
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    setFiltered(filterProducts(productsData, filters));
  }, [filters, productsData]);

  return (
    <div>
      <h1>Каталог</h1>
      <div className="filters">
        <input
          placeholder="Поиск..."
          onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
        />
        <select onChange={(e) => setFilters((f) => ({ ...f, state: e.target.value }))}>
          <option value="">Все</option>
          <option value="Новинка">Новинка</option>
          <option value="Распродажа">Распродажа</option>
        </select>
        <input
          type="number"
          placeholder="Цена от"
          onChange={(e) => setFilters((f) => ({ ...f, minPrice: e.target.value }))}
        />
        <input
          type="number"
          placeholder="Цена до"
          onChange={(e) => setFilters((f) => ({ ...f, maxPrice: e.target.value }))}
        />
      </div>
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.product_id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;

