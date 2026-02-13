import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./ui-components/user/HomeView";
import CategoryView from "./ui-components/user/ProductCategoryWiseView";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductDetailsView from "./ui-components/user/ProductDetailsView";

export default function App() {
  return (
    <BrowserRouter basename="/bms-book-store">
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<HomeView />} />
        <Route path="/product/fiction" element={<CategoryView />} />
        <Route path="/product-details" element={<ProductDetailsView />} />

      </Routes>
    </BrowserRouter>
  );
}

