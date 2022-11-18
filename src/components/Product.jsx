function Product({ product }) {
  return (
    <div className="product-item">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-title">{product.title}</div>
      <div className="product-count">Count:{product.rating.count}</div>
      <div className="product-price">Price:{product.price}</div>
    </div>
  );
}

export default Product;
