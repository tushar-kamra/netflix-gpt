import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();

    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    return (
        <>
            <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-30 flex items-center justify-between">
                <img
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="logo"
                    className="w-40"
                />
                {user && (
                    <div className="flex items-center gap-2">
                        <img src={user.photoURL} className="w-8 h-8" />
                        <button
                            className="font-bold text-white"
                            onClick={handleSignOut}
                        >
                            Sign out
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
