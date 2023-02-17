import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase";

function Login() {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <section className="w-4/5 sm:w-[500px]  min-h-[80vh] flex flex-col justify-center items-center gap-5 mx-auto py-5">
            <h1 className="text-3xl font-semibold text-gray-500">Login</h1>
            <form
                className="w-full flex flex-col gap-2.5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="email"
                    placeholder="email address"
                    className="w-full block text-gray-500 border-2 border-gray-400 outline-none px-2.5 py-1.5 rounded-md"
                    {...register("email", {
                        required: true,
                        pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    })}
                />
                {errors.email?.type === "required" && (
                    <p className="text-[10px] text-red-400">
                        Email is required.
                    </p>
                )}

                {errors.email?.type === "pattern" && (
                    <p className="text-[10px] text-red-400">
                        Please give a valid email.
                    </p>
                )}

                <input
                    type="password"
                    placeholder="password"
                    className="w-full block text-gray-500 border-2 border-gray-400 outline-none px-2.5 py-1.5 rounded-md"
                    {...register("password", {
                        required: true,
                        pattern:
                            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                    })}
                />

                {errors.password?.type === "required" && (
                    <p className="text-[10px] text-red-400">
                        Password is required.
                    </p>
                )}

                {errors.password?.type === "pattern" && (
                    <p className="text-[10px] text-red-400">
                        Password must be between 6 and 16 characters long and
                        contain at least one digit and one special character (!,
                        @, #, $, %, ^, &, or *).
                    </p>
                )}

                <input
                    type="submit"
                    value="Login"
                    className="w-full block text-white bg-blue-500 outline-none px-2.5 py-1.5 rounded-md"
                />
            </form>

            {error && (
                <p className="text-sm text-red-400 bg-red-100 px-2.5 py-1.5 rounded">
                    {error.message}
                </p>
            )}

            <Link
                to="/signup"
                className="text-sm text-gray-500 px-2.5 py-1.5 border rounded"
            >
                Create new account
            </Link>
        </section>
    );
}

export default Login;
