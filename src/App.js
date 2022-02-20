import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import ProductListing from './Components/ProductListing';
import ProductDetail from './Components/ProductDetail';
function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
      <Route exact path="/"  element={<ProductListing />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route>404 NOT FOUND</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
