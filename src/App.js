import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import NonFound from "./components/NonFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
const [selectedCategory,setSelectedCategory]=useState(null);
console.log(selectedCategory);

  return (
    <Router>
      <div>
        <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<ProductList selectedCategory={selectedCategory}/>} />
          <Route exact path="/nonFound" element={<NonFound />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
