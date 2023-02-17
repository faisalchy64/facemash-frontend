import { Link } from "react-router-dom";

function Post() {
    return (
        <div className="text-gray-500 px-2.5 py-1.5 border-2 border-gray-400 rounded-md">
            <h1 className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-3xl">
                    account_circle
                </span>
                <span>Faisal</span>
            </h1>

            <p className="text-xs my-2.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, ipsa consequatur. Iusto nobis quidem aperiam facere!
                Est quibusdam ad consequatur.
            </p>

            <img
                src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=1380&t=st=1676639763~exp=1676640363~hmac=350941d5370f1c0e9413f7e3ebe06aafca2c42c744ef431f8941c2a9d9940b21"
                alt=""
            />

            <div className="flex justify-between items-center my-2.5">
                <p className="flex items-center gap-0.5">
                    <span className="material-symbols-outlined">favorite</span>
                    <span>10</span>
                </p>
                <Link
                    to="/post/1"
                    className="text-white bg-blue-500 px-2.5 py-1.5"
                >
                    Details
                </Link>
            </div>
        </div>
    );
}

export default Post;
