import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkSignInValidData, checkSignUpValidData } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const dispath = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setError({});
    };

    const handleBtnClick = (e) => {
        e.preventDefault();

        let errorMsg = null;
        if (isSignInForm) {
            errorMsg = checkSignInValidData(
                email.current.value,
                password.current.value
            );
            setError(errorMsg);
        } else {
            errorMsg = checkSignUpValidData(
                name.current.value,
                email.current.value,
                password.current.value
            );
            setError(errorMsg);
        }

        if (Object.keys(errorMsg).length) return;

        if (isSignInForm) {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((err) => {
                    setError({ password: `${err.code} - ${err.message}` });
                });
        } else {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL:
                            "https://avatars.githubusercontent.com/u/44259288?v=4",
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } =
                                auth.currentUser;
                            dispath(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                            navigate("/browse");
                        })
                        .catch((err) => {
                            setError({
                                password: `${err.code} - ${err.message}`,
                            });
                        });
                })
                .catch((err) => {
                    setError({ password: `${err.code} - ${err.message}` });
                });
        }
    };

    return (
        <>
            <Header />
            <div className="absolute z-[1]">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="banner"
                />
            </div>

            <form className="absolute z-20 my-36 w-[420px] p-8 bg-black mx-auto left-0 right-0 text-white rounded-md bg-opacity-80">
                <h1 className="text-3xl font-bold">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-2 rounded-md mt-4 bg-gray-700"
                    />
                )}
                {!isSignInForm && error.name && (
                    <p className="text-red-500 mt-3">{error.name}</p>
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Enter email"
                    className="w-full p-2 rounded-md mt-4 bg-gray-700"
                />
                {error.email && (
                    <p className="text-red-500 mt-3">{error.email}</p>
                )}

                <input
                    ref={password}
                    type="password"
                    placeholder="Enter password"
                    className="w-full p-2 rounded-md mt-4 bg-gray-700"
                />
                {error.password && (
                    <p className="text-red-500 mt-3">{error.password}</p>
                )}

                <button
                    className="p-2 mt-6 bg-red-700 w-full rounded-md"
                    onClick={handleBtnClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p
                    className="mt-[24px] cursor-pointer"
                    onClick={toggleSignInForm}
                >
                    {isSignInForm
                        ? "New to Netflix? Sign up now"
                        : "Alread registered? Sign in now."}
                </p>
            </form>
        </>
    );
};

export default Login;
