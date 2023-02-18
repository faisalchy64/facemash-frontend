import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase";

function AuthRoute({ children }) {
    const location = useLocation();
    const [user] = useAuthState(auth);

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AuthRoute;
