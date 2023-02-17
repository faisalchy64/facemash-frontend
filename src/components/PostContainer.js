import Post from "./Post";

function PostContainer() {
    return (
        <section className="w-4/5 sm:w-[500px] flex flex-col gap-5 mx-auto py-5">
            <Post />
            <Post />
            <Post />
        </section>
    );
}

export default PostContainer;
