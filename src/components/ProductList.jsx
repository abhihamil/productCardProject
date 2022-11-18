import useApi from "../hooks/useApi";
import Product from "./Product";
function ProductList({ selectedCategory }) {
  console.log("from productlist", selectedCategory);

  const {
    data: productlist,
    loading,
    error,
  } = useApi(
    `https://fakestoreapi.com/products/category/${selectedCategory}`,
    []
  );
  console.log("from productlist", { productlist });
  if (loading) {
    return <div className="loader">Produclist are loading...</div>;
  } else if (error) {
    return <div className="error">Oops! please reload the page.</div>;
  } else if (productlist.length === 0) {
    return <div>No Products found! Please select a category</div>;
  } else {
    return (
      <div className="product-list">
        {productlist.map((product) => (
          <Product product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
