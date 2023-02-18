import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import auth from "../firebase";
import Navbar from "./Navbar";
import Loading from "../components/Loading";

function Main() {
    const [, loading] = useAuthState(auth);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <Outlet />
                </>
            )}
        </>
    );
}

export default Main;
