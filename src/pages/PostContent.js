import Comment from "../components/Comment";
import Post from "../components/Post";

function PostContent() {
    return (
        <section className="w-4/5 sm:w-[500px] flex flex-col gap-5 mx-auto py-5">
            <Post />
            <form>
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

            <Comment />
        </section>
    );
}

export default PostContent;
