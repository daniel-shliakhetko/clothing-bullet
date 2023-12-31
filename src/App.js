import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { FrontPage } from "./pages/FrontPage/FrontPage";
import { ProductListPage } from "./pages/ProductListPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { Header } from "./components/semantics/Header";
import { Footer } from "./components/semantics/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Clothing Bullet</title>
        <meta name="description" content="The best clothing shop on the internet! Clothing Bullet! Our values are: quality, accessibility and style! Join us right now!"/>
        <meta name="keywords" content="Clothing, Bullet, Store, Style"/>
      </Helmet>
      <div className="Wrapper w-full h-full bg-indigo-100 overflow-x-hidden">
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
  );
}

export default App;
//Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
