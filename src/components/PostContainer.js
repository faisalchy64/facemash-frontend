import Post from "./Post";

function PostContainer({ posts }) {
    return (
        <section className="w-4/5 sm:w-[500px] flex flex-col gap-5 mx-auto py-5">
            {posts
                .sort((x, y) => y.react.count - x.react.count)
                .slice(0, 3)
                .map((post) => (
                    <Post key={post._id} post={post} />
                ))}
        </section>
    );
}

export default PostContainer;
