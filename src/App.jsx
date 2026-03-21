import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
import ReturnAndRefundView from "./ui-components/user/ReturnAndRefundView";
import PrivateRoute from "./PrivateRoute";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <BrowserRouter basename="/bms-book-store">
      <UserProvider>

        <Toaster
          position="bottom-center"
          reverseOrder={false}
          gutter={10}
          toastOptions={{
            duration: 3000,

            style: {
              background: "#1a1a1a",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
              padding: "12px 20px",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              maxWidth: "360px",
            },

            success: {
              duration: 2500,
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff",
              },
              style: {
                background: "#1a1a1a",
                color: "#fff",
                borderLeft: "4px solid #22c55e",
              },
            },

            error: {
              duration: 3500,
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
              style: {
                background: "#1a1a1a",
                color: "#fff",
                borderLeft: "4px solid #ef4444",
              },
            },

            loading: {
              style: {
                background: "#1a1a1a",
                color: "#fff",
                borderLeft: "4px solid #3b82f6",
              },
            },
          }}
        />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomeView />} />
          <Route path="/product/fiction" element={<CategoryView />} />
          <Route path="/product-details" element={<ProductDetailsView />} />
          <Route path="/product-default" element={<ProductDefaultView />} />
          <Route path="/return-refund" element={<ReturnAndRefundView />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/wish-list" element={<WishlistView />} />
            <Route path="/cart-list" element={<AddToCartView />} />
            <Route path="/my-account" element={<DashboardView />} />
            <Route path="/my-orders" element={<MyOrdersView />} />
            <Route path="/my-addresses" element={<MyAddressView />} />
            <Route path="/my-account-details" element={<MyAccountDetails />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </UserProvider>
    </BrowserRouter>
  );
}