import { useEffect, useState } from "react";
import { url } from "../common";
import Post from "./Post";

function PostContainer() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${url}/posts`)
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <section className="w-4/5 sm:w-[500px] flex flex-col gap-5 mx-auto py-5">
            {posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </section>
    );
}

export default PostContainer;
