import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <>
            <Header />
            <div className="absolute z-[1]">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="banner" />
            </div>

            <form className="absolute z-20 my-36 w-[420px] p-8 bg-black mx-auto left-0 right-0 text-white rounded-md bg-opacity-80">
                <h1 className="text-3xl font-bold">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="w-full p-2 rounded-md mt-4 bg-gray-700" />}
                <input
                    type="text"
                    placeholder="Enter email"
                    className="w-full p-2 rounded-md mt-4 bg-gray-700"
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full p-2 rounded-md mt-4 bg-gray-700"
                />
                <button className="p-2 mt-6 bg-red-700 w-full rounded-md">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="mt-[24px] cursor-pointer" onClick={toggleSignInForm}>
                    
                    {isSignInForm ? 'New to Netflix? Sign up now' : 'Alread registered? Sign in now.'}
                </p>
            </form>
        </>
    );
};

export default Login;
