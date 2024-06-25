export const checkSignInValidData = (email, password) => {
    const isEmailValid =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
            email
        );

    if (!isEmailValid) return { email: "Email ID is not valid" };

    const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if (!isPasswordValid) return { password: "Password is not valid" };

    return null;
};

export const checkSignUpValidData = (name, email, password) => {
    const isNameValid = /^[a-zA-Z]/.test(name);
    if (!isNameValid) return { name: "Name is not valid" };

    const isEmailValid =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
            email
        );

    if (!isEmailValid) return { email: "Email ID is not valid" };

    const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if (!isPasswordValid) return { password: "Password is not valid" };

    return null;
};
