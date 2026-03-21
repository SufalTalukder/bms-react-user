// PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./context/UserContext";

export default function PrivateRoute() {

    const { user, loading } = useUser();
    const token = sessionStorage.getItem("accessToken");

    if (loading) return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="spinner-border" role="status" />
        </div>
    );

    if (!user || !token) return <Navigate to="/" replace />;

    return <Outlet />;
}