// PublicRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./context/UserContext";

export default function PublicRoute() {
    const { user } = useUser();
    const token = sessionStorage.getItem("accessToken");

    // ✅ If already logged in, send to account dashboard
    if (user && token) return <Navigate to="/my-account" replace />;

    return <Outlet />;
}