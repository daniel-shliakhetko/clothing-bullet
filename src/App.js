import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FrontPage } from "./pages/FrontPage";
import { ProductListPage } from "./pages/ProductListPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
