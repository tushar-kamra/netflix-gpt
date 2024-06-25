import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkSignInValidData, checkSignUpValidData } from "../utils/validate";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [error, setError] = useState({});

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setError({});
    };

    const handleBtnClick = (e) => {
        e.preventDefault();

        if (isSignInForm) {
            const errorMsg = checkSignInValidData(
                email.current.value,
                password.current.value
            );
            console.log(errorMsg);
            setError(errorMsg);
        } else {
            const errorMsg = checkSignUpValidData(
                name.current.value,
                email.current.value,
                password.current.value
            );
            setError(errorMsg);
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
                {error.name && (
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
