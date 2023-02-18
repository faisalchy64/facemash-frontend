import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { url } from "../common";
import Comment from "../components/Comment";
import Post from "../components/Post";
import auth from "../firebase";

function PostContent() {
    const [post, setPost] = useState({});
    const [user] = useAuthState(auth);
    const { id } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (e.target.comment.value) {
            const comment = {
                username: user.displayName,
                email: user.email,
                comment: e.target.comment.value,
                timestamp: Date.now(),
            };

            const response = await fetch(`${url}/posts/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ comments: [...post.comments, comment] }),
            });

            const result = await response.json();

            if (result) {
                e.target.comment.value = "";
                setPost({ ...post, comments: [...post.comments, comment] });
            }
        }
    };

    useEffect(() => {
        fetch(`${url}/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id]);

    return (
        <section className="w-4/5 sm:w-[500px] flex flex-col gap-5 mx-auto py-5">
            <Post post={post} />
            <form onSubmit={handleSubmit}>
                <textarea
                    type="text"
                    name="comment"
                    className="w-full h-20 block text-gray-500 border-2 border-gray-400 outline-none px-2.5 py-1.5 rounded-md resize-none"
                    placeholder="Write a comment..."
                    autoComplete="off"
                ></textarea>

                <input
                    type="submit"
                    value="Send"
                    placeholder="image url"
                    className="w-full block text-white bg-blue-500 outline-none px-2.5 py-1.5 my-2.5 rounded-md"
                />
            </form>

            {post?.comments?.map((comment) => (
                <Comment key={comment.timestamp} userComment={comment} />
            ))}
        </section>
    );
}

export default PostContent;
