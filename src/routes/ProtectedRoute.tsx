import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
    const { token } = useSelector((state) => state.auth);
    const isAuth = Boolean(token);

    if (!isAuth) {
        return <Navigate to={"/login"} replace />;
    }

    return children;
};

export default ProtectedRoute;
