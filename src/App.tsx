import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lookbook from "./pages/Lookbook";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import News from "./pages/News";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AllProduct from "./pages/AllProduct";
import BestSeller from "./pages/BestSeller";
import ProductDetail from "./pages/ProductDetail";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import ShippingExchange from "./pages/ShippingExchange";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductCategory from "./pages/ProductCategory";
import LookbookDetail from "./pages/LookbookDetail";
import NewProduct from "./pages/NewProduct";
import CollectionList from "./pages/CollectionList";
import OrderComplete from "./pages/OrderComplete";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white pt-16">
        <div className="flex-1 flex flex-col h-full relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/best-seller" element={<BestSeller />} />
            <Route path="/lookbook" element={<Lookbook />} />

            <Route path="/lookbook">
              <Route path=":id" element={<LookbookDetail />} />
            </Route>
            <Route path="/product">
              <Route path=":id" element={<ProductDetail />} />
            </Route>

            <Route path=":category" element={<ProductCategory />} />

            <Route path="/collection">
              <Route path=":id" element={<CollectionList />} />
            </Route>

            <Route path="/news" element={<News />} />
            <Route path="/new" element={<NewProduct />} />
            <Route path="/all" element={<AllProduct />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-complete" element={<OrderComplete />} />
            <Route path="/shipping-exchange" element={<ShippingExchange />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
