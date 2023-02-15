import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";

function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className='product-container'>
          <Product />
        </div>
        <div className='border-bottom'></div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
