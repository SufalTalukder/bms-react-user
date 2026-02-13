import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./ui-components/user/HomeView";
import CategoryView from "./ui-components/user/CategoryView";

export default function App() {

  return (
    <BrowserRouter basename="/bms-book-store">
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<HomeView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/fiction" element={<CategoryView />} />

      </Routes>
    </BrowserRouter>
  );
}

