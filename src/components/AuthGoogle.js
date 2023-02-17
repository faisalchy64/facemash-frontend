import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase";

function AuthGoogle() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogle = async () => {
        await signInWithGoogle();
    };

    return (
        <>
            <button
                className="text-sm text-gray-500 px-2.5 py-1.5 border rounded"
                onClick={handleGoogle}
            >
                Continue with google
            </button>
            {error && (
                <p className="text-sm text-red-400 bg-red-100 px-2.5 py-1.5 rounded">
                    {error.message}
                </p>
            )}
        </>
    );
}

export default AuthGoogle;
