import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Main() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Main;
