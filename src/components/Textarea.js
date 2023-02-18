import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { url } from "../common";
import auth from "../firebase";
import Toast from "./Toast";

function Textarea({ posts, setPosts }) {
    const [show, setShow] = useState(false);
    const [toast, setToast] = useState(false);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ((user && e.target.body.value) || e.target.image.value) {
            const post = {
                username: user.displayName,
                email: user.email,
                body: e.target.body.value,
                image: e.target.image.value,
                react: { count: 0, person: [] },
                comments: [],
                timestamp: Date.now(),
            };

            const response = await fetch(`${url}/posts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(post),
            });

            const result = await response.json();

            if (result) {
                e.target.body.value = "";
                e.target.image.value = "";

                console.log(result);

                setShow(false);
                setToast(true);
                setPosts([...posts, { ...post, _id: result.insertedId }]);
                setTimeout(() => setToast(false), 2500);
            }
        }
    };

    const handleTextarea = () => {
        if (user) {
            setShow(true);
        } else {
            navigate("/login");
        }
    };

    return (
        <section className="w-4/5 sm:w-[500px] mx-auto py-5">
            {show && (
                <div className="flex justify-between items-center py-5">
                    <h1 className="text-lg font-semibold text-gray-500 text-center relative">
                        Create Post
                    </h1>
                    <span
                        className="material-symbols-outlined text-3xl text-gray-500 cursor-pointer"
                        onClick={() => setShow(false)}
                    >
                        cancel
                    </span>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <textarea
                    className="w-full h-40 block text-gray-500 px-2.5 py-1.5 border-2 border-gray-400 outline-none resize-none rounded-md"
                    name="body"
                    placeholder="What's on your mind?"
                    onFocus={handleTextarea}
                ></textarea>

                {show && (
                    <input
                        type="text"
                        name="image"
                        placeholder="image url"
                        className="w-full block border-2 border-gray-400 outline-none px-2.5 py-1.5 my-2.5 rounded-md"
                    />
                )}

                {show && (
                    <input
                        type="submit"
                        placeholder="image url"
                        className="w-full block text-white bg-blue-500 outline-none px-2.5 py-1.5 rounded-md"
                    />
                )}
            </form>

            {toast && (
                <Toast message="Post uploaded successfully." color="green" />
            )}
        </section>
    );
}

export default Textarea;
