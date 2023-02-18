import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { url } from "../common";
import Modal from "../components/Modal";
import auth from "../firebase";

function About() {
    const [show, setShow] = useState(false);
    const [person, setPerson] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`${url}/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setPerson(data));
    }, [user, person]);

    return (
        <section className="w-4/5 min-h-[80vh] sm:w-[500px] flex flex-col justify-center gap-5 relative mx-auto py-5">
            <h1 className="flex justify-between items-center">
                <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-4xl font-semibold text-gray-500">
                        account_circle
                    </span>
                    <span className="text-2xl font-semibold text-gray-500">
                        {person.username ? person.username : user.displayName}
                    </span>
                </span>
                <span
                    className="material-symbols-outlined text-4xl font-semibold text-gray-500 cursor-pointer"
                    onClick={() => setShow(true)}
                >
                    edit_note
                </span>
            </h1>
            <p className="font-semibold text-gray-500 my-1.5">
                Email - {person.secondary}
            </p>
            <p className="font-semibold text-gray-500 my-1.5">
                University - {person.university}
            </p>
            <p className="font-semibold text-gray-500 my-1.5">
                Address - {person.address}
            </p>

            {show && (
                <Modal
                    person={person}
                    setPerson={setPerson}
                    setShow={setShow}
                />
            )}
        </section>
    );
}

export default About;
