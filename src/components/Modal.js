import { url } from "../common";

function Modal({ person, setPerson, setShow }) {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            username: person.username,
            email: person.email,
            secondary: person.secondary,
            university: person.university,
            address: person.address,
        };

        if (e.target.name.value) {
            user.username = e.target.name.value;
        }

        if (e.target.email.value) {
            user.secondary = e.target.email.value;
        }

        if (e.target.university.value) {
            user.university = e.target.university.value;
        }

        if (e.target.address.value) {
            user.address = e.target.address.value;
        }

        const response = await fetch(`${url}/users/${person._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });

        const result = await response.json();

        if (result) {
            setPerson({ ...user });
            setShow(false);
        }
    };

    return (
        <div className="w-full h-fit flex flex-col gap-2.5 bg-slate-50 absolute inset-0 px-3.5 py-5 m-auto shadow-md rounded-md">
            <h1 className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-500">
                    Edit Content
                </span>
                <span
                    className="material-symbols-outlined text-4xl font-semibold text-gray-500 cursor-pointer"
                    onClick={() => setShow(false)}
                >
                    close
                </span>
            </h1>
            <form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="w-full block text-gray-500 border-2 border-gray-400 outline-none px-2.5 py-1.5 rounded-md"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="w-full block text-gray-500 border-2 border-gray-400 outline-none px-2.5 py-1.5 rounded-md"
                />
                <input
                    type="text"
                    name="university"
                    placeholder="university"
                    className="w-full block text-gray-500 border-2 border-gray-400 outline-none px-2.5 py-1.5 rounded-md"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="address"
                    className="w-full block text-gray-500 border-2 border-gray-400 outline-none px-2.5 py-1.5 rounded-md"
                />

                <input
                    type="submit"
                    value="Update"
                    className="w-full block text-white bg-blue-500 outline-none px-2.5 py-1.5 rounded-md"
                />
            </form>
        </div>
    );
}

export default Modal;
