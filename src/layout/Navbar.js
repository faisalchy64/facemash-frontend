import { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase";

function Navbar() {
    const [show, setShow] = useState(false);
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <nav className="py-2.5">
            <div className="w-4/5 flex justify-between items-center mx-auto">
                <Link
                    to="/"
                    className="text-2xl sm:text-3xl font-bold text-blue-500"
                >
                    facemash
                </Link>

                <ul className="hidden sm:flex items-center gap-2.5 text-sm text-gray-500">
                    <li>
                        <Link to="/media">Media</Link>
                    </li>
                    <li>
                        <Link to="/message">Message</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        {user ? (
                            <button onClick={handleSignOut}>Logout</button>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                </ul>

                <span
                    className="material-symbols-outlined sm:hidden text-3xl text-gray-500 relative cursor-pointer"
                    onClick={() => setShow(!show)}
                >
                    menu
                </span>

                {show && (
                    <ul
                        className="flex flex-col sm:hidden items-center gap-2.5 bg-white text-sm text-gray-500 px-2.5 py-3 absolute top-[7.5%] right-[5%] shadow-md rounded z-10"
                        onClick={() => setShow(!show)}
                    >
                        <li>
                            <Link to="/media">Media</Link>
                        </li>
                        <li>
                            <Link to="/message">Message</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            {user ? (
                                <button onClick={handleSignOut}>Logout</button>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
