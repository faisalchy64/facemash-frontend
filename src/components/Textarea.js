import { useState } from "react";

function Textarea() {
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.body.value);
    };

    return (
        <div className="w-4/5 sm:w-[500px] mx-auto py-5">
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
                    onFocus={() => setShow(true)}
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
        </div>
    );
}

export default Textarea;
