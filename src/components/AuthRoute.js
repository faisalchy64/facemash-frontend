import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase";

function AuthRoute({ children }) {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AuthRoute;
