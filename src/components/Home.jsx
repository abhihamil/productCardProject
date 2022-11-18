import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>Hello from Home component</div>
      <Link to="/product">To Product</Link>
      <br/>
      <Link to="/nonFound">Non Found</Link>
      
    </div>
  );
}

export default Home;
