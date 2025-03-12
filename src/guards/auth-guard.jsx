import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";



const AuthGuard = () => {
    const currentUser = useSelector((state) => state.auth.currentUser);
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthGuard;
