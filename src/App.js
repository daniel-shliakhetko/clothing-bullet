import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { FrontPage } from "./pages/FrontPage";
import { ProductListPage } from "./pages/ProductListPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import store from "./store/store";
import { Provider } from "react-redux";
import { Header } from "./components/semantics/Header";
import { Footer } from "./components/semantics/Footer";
import { ProductsContext } from "./contexts/ProductsContext";

function App() {
  return (
    <Provider store={store}>
      <ProductsContext>
        <Router>
          <div className="Wrapper w-full h-full bg-indigo-100">
            <div className="App w-full max-w-[1440px] min-h-screen m-auto flex flex-col">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<FrontPage />} />
                  <Route path="/products" element={<ProductListPage />} />
                  <Route path="/products/:id" element={<ProductPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      </ProductsContext>
    </Provider>
  );
}

export default App;
