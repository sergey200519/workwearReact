import React, { useState, useEffect } from "react";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { filterProducts } from "../utils/filterProducts";

const Home = () => {
  const [filters, setFilters] = useState({
    state: "",
    minPrice: "",
    maxPrice: "",
    query: ""
  });

  const [filtered, setFiltered] = useState(productsData);

  useEffect(() => {
    setFiltered(filterProducts(productsData, filters));
    console.log(productsData);
    
  }, [filters]);

  return (
    <div>
      <h1>Каталог</h1>
      <div className="filters">
        <input placeholder="Поиск..." onChange={(e) => setFilters(f => ({ ...f, query: e.target.value }))} />
        <select onChange={(e) => setFilters(f => ({ ...f, state: e.target.value }))}>
          <option value="">Все</option>
          <option value="Новинка">Новинка</option>
          <option value="Распродажа">Распродажа</option>
        </select>
        <input type="number" placeholder="Цена от" onChange={(e) => setFilters(f => ({ ...f, minPrice: e.target.value }))} />
        <input type="number" placeholder="Цена до" onChange={(e) => setFilters(f => ({ ...f, maxPrice: e.target.value }))} />
      </div>
      <div className="product-grid">
        {filtered.map(product => <ProductCard key={product.product_id} product={product} />)}
      </div>
    </div>
  );
};

export default Home;
