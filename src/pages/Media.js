import Post from "../components/Post";

function Media() {
    return (
        <section className="w-4/5 sm:w-[500px] flex flex-col gap-5 mx-auto py-5">
            <h1 className="text-2xl font-semibold text-gray-500">All Posts</h1>
            <Post />
            <Post />
            <Post />
        </section>
    );
}

export default Media;
