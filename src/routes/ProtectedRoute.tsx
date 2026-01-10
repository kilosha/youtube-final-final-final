import { Navigate } from "react-router";
import type { ReactNode } from "react";

import useTypedSelector from "../hooks/useTypedSelector";

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
