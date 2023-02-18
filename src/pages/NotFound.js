import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center gap-2.5">
            <h1 className="text-3xl font-semibold text-blue-500">
                Page Not Found 404!
            </h1>
            <Link to="/" className="bg-blue-100 text-blue-500 px-2.5 py-1.5">
                Back To Home Page
            </Link>
        </section>
    );
}

export default NotFound;
