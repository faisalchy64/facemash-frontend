import { useEffect, useState } from "react";
import { url } from "../common";
import Post from "../components/Post";

function Media() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${url}/posts`)
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <section className="w-4/5 sm:w-[500px] flex flex-col gap-5 mx-auto py-5">
            <h1 className="text-2xl font-semibold text-gray-500">All Posts</h1>
            {posts
                .sort((x, y) => y.timestamp - x.timestamp)
                .map((post) => (
                    <Post key={post._id} post={post} />
                ))}
        </section>
    );
}

export default Media;
