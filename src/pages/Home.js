import { useEffect, useState } from "react";
import { url } from "../common";
import PostContainer from "../components/PostContainer";
import Textarea from "../components/Textarea";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${url}/posts`)
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <>
            <Textarea posts={posts} setPosts={setPosts} />
            <PostContainer posts={posts} />
        </>
    );
}

export default Home;
