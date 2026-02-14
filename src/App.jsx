import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./ui-components/user/HomeView";
import CategoryView from "./ui-components/user/ProductCategoryWiseView";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductDetailsView from "./ui-components/user/ProductDetailsView";
import ProductDefaultView from "./ui-components/user/ProductDefaultView";
import WishlistView from "./ui-components/user/WishlistView";
import AddToCartView from "./ui-components/user/AddToCartView";
import PageNotFound from "./ui-components/user/PageNotFound";
import DashboardView from "./ui-components/user/DashboardView";
import MyOrdersView from "./ui-components/user/MyOrdersView";
import MyAddressView from "./ui-components/user/MyAddressView";
import MyAccountDetails from "./ui-components/user/MyAccountDetails";

export default function App() {
  return (
    <BrowserRouter basename="/bms-book-store">
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<HomeView />} />a
        <Route path="/product/fiction" element={<CategoryView />} />
        <Route path="/product-details" element={<ProductDetailsView />} />
        <Route path="/product-default" element={<ProductDefaultView />} />

        {/* Protected Routes */}
        <Route path="/wish-list" element={<WishlistView />} />
        <Route path="/cart-list" element={<AddToCartView />} />
        <Route path="/my-account" element={<DashboardView />} />
        <Route path="/my-orders" element={<MyOrdersView />} />
        <Route path="/my-addresses" element={<MyAddressView />} />
        <Route path="/my-account-details" element={<MyAccountDetails />} />

        {/* Page not found */}
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

