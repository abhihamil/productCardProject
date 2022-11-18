import { useCallback } from "react";
import useApi from "../hooks/useApi";

function Navbar({setSelectedCategory}) {
  const {
    data: categories,
    loading,
    error,
  } = useApi("https://fakestoreapi.com/products/categories", null);

  const handleClicked = useCallback(
    (category) => {
      setSelectedCategory(category);
    },
    [setSelectedCategory]
  );

  console.log("INside navbar", categories, loading, error);
  if (loading) {
    return <div className="loader">Categories are loading...</div>;
  } else if (error) {
    return <div className="error">Oops! please reload the page.</div>;
  } else if (categories.length === 0) {
    return <div>No Categories found</div>;
  } else {
    return (
      <div className="products">
        {categories.map((category) => (
          <div
            onClick={() => handleClicked( category )}
            className="product-category"
            key={`category-${category}`}
          >
            {category}
          </div>
        ))}
      </div>
    );
  }
}

export default Navbar;
