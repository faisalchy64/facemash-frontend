import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase";
import AuthGoogle from "../components/AuthGoogle";
import { useEffect } from "react";
import { url } from "../common";

function Signup() {
    const [createUserWithEmailAndPassword, , , error] =
        useCreateUserWithEmailAndPassword(auth);

    const [updateProfile] = useUpdateProfile(auth);
    const [user] = useAuthState(auth);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            const person = {
                username: user.displayName,
                email: user.email,
                secondary: user.email,
                university: "Not yet provided.",
                address: "Not yet provided.",
            };

            fetch(`${url}/users`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(person),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));

            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    return (
        <section className="w-4/5 sm:w-[500px]  min-h-[80vh] flex flex-col justify-center items-center gap-5 mx-auto py-5">
            <h1 className="text-3xl font-semibold text-gray-500">Signup</h1>
            <form
                className="w-full flex flex-col gap-2.5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="text"
                    placeholder="name"
                    className="w-full block text-gray-500 border-2 border-gray-400 outline-none px-2.5 py-1.5 rounded-md"
                    {...register("name", {
                        required: true,
                        pattern: /^[a-zA-Z ]{2,30}$/,
                    })}
                />
                {errors.name?.type === "required" && (
                    <p className="text-[10px] text-red-400">
                        Name is required.
                    </p>
                )}

                {errors.email?.type === "pattern" && (
                    <p className="text-[10px] text-red-400">
                        Please give a valid name.
                    </p>
                )}

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
                    value="Signup"
                    className="w-full block text-white bg-blue-500 outline-none px-2.5 py-1.5 rounded-md"
                />
            </form>

            {error && (
                <p className="text-sm text-red-400 bg-red-100 px-2.5 py-1.5 rounded">
                    {error.message}
                </p>
            )}

            <Link
                to="/login"
                className="text-sm text-gray-500 px-2.5 py-1.5 border rounded"
            >
                Already have an account?
            </Link>

            <AuthGoogle />
        </section>
    );
}

export default Signup;
