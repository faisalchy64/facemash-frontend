import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { url } from "../common";
import auth from "../firebase";
import { useEffect, useState } from "react";

function Post({ post }) {
    const [reaction, setReaction] = useState({ count: 0, person: [] });
    const [user] = useAuthState(auth);

    const { _id, username, body, image, react } = post;

    const handleReact = async () => {
        if (reaction?.person?.includes(user.email)) {
            if (reaction.count > 0) {
                const response = await fetch(`${url}/posts/${_id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        react: {
                            count: reaction.count - 1,
                            person: reaction.person.filter(
                                (x) => x !== user.email
                            ),
                        },
                    }),
                });

                const result = await response.json();

                if (result) {
                    setReaction({
                        ...reaction,
                        count: reaction.count - 1,
                        person: reaction.person.filter((x) => x !== user.email),
                    });
                }
            }
        } else {
            const response = await fetch(`${url}/posts/${_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    react: {
                        count: reaction.count + 1,
                        person: [...reaction.person, user.email],
                    },
                }),
            });

            const result = await response.json();

            if (result) {
                setReaction({
                    ...reaction,
                    count: reaction.count + 1,
                    person: [...reaction.person, user.email],
                });
            }
        }
    };

    useEffect(() => {
        setReaction({ ...react });
    }, [react]);

    return (
        <div className="text-gray-500 px-2.5 py-1.5 border-2 border-gray-400 rounded-md">
            <h1 className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-3xl">
                    account_circle
                </span>
                <span>{username}</span>
            </h1>

            <p className="text-xs my-2.5">{body}</p>

            <img src={image} alt="" />

            <div className="flex justify-between items-center my-2.5">
                <p className="flex items-center gap-0.5">
                    <span
                        className={`material-symbols-outlined cursor-pointer ${
                            reaction?.person?.includes(user.email)
                                ? "text-red-400"
                                : ""
                        }`}
                        onClick={handleReact}
                    >
                        favorite
                    </span>
                    <span>{reaction?.count}</span>
                </p>
                <Link
                    to={`/post/${_id}`}
                    className="text-white bg-blue-500 px-2.5 py-1.5"
                >
                    Details
                </Link>
            </div>
        </div>
    );
}

export default Post;
