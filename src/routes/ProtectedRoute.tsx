import { Navigate } from "react-router";
import useTypedSelector from "../hooks/useTypedSelector";
import type { ReactNode } from "react";

type PropsType = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: PropsType) => {
    const { token } = useTypedSelector((state) => state.auth);
    const isAuth = Boolean(token);

    if (!isAuth) {
        return <Navigate to={"/login"} replace />;
    }

    return children;
};

export default ProtectedRoute;
