function Toast({ message, color }) {
    return (
        <h1
            className={`text-sm text-${color}-500 bg-${color}-100 px-3 py-2.5 absolute top-[10%] right-[5%] rounded shadow-md`}
        >
            {message}
        </h1>
    );
}

export default Toast;
