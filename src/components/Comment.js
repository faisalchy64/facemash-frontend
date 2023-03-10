function Comment({ userComment }) {
    const { username, comment } = userComment;

    return (
        <div className="text-gray-500 px-2.5 py-1.5 border-2 border-gray-400 rounded-md">
            <h1 className="flex items-center gap-1.5 text-sm">
                <span className="material-symbols-outlined">
                    account_circle
                </span>
                <span>{username}</span>
            </h1>

            <p className="text-xs px-1.5 my-2.5">{comment}</p>
        </div>
    );
}

export default Comment;
