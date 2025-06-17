export function filterProducts(products, filters) {
  return products
    .filter(p => !filters.state || p.state === filters.state)
    .filter(p => !filters.minPrice || +p.price_retail >= +filters.minPrice)
    .filter(p => !filters.maxPrice || +p.price_retail <= +filters.maxPrice)
    .filter(p => !filters.query || p.name.toLowerCase().includes(filters.query.toLowerCase()));
}
