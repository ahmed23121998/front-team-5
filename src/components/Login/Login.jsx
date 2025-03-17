import { useState } from "react";

function Login() {
    const [loginForm, setLogin] = useState({
        email: "",
        password: "",
    });
    const [errors, setError] = useState({
        emailError: "",
        passwordError: "",
    });

    let handle = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            const emailPattern = /^[a-zA-Z0-9_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!value) {
                setError({ ...errors, emailError: "Email is required" });
            } else if (emailPattern.test(value)) {
                setError({ ...errors, emailError: "" });
            } else {
                setError({ ...errors, emailError: "Invalid email" });
            }
            setLogin({ ...loginForm, email: value });
        } else if (name === "password") {
            setLogin({ ...loginForm, password: value });
            if (!value) {
                setError({ ...errors, passwordError: "Password is required" });
            } else if (value.length < 8) {
                setError({ ...errors, passwordError: "Min length is 8" });
            } else {
                setError({ ...errors, passwordError: "" });
            }
        }
    };

    let handleLogin = (e) => {
        e.preventDefault();
        if (!errors.emailError && !errors.passwordError && loginForm.email && loginForm.password) {
            console.log("Logged in successfully!", loginForm);
        }
    };

    return (
        <div className="mb-3 col-6 m-auto p-5 bg-primary">
            <form onSubmit={handleLogin}>
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className={`form-control ${errors.emailError ? "border-danger" : ""}`}
                    name="email"
                    value={loginForm.email}
                    onChange={handle}
                    placeholder="ahmed@gmail.com"
                />
                <div className="text-danger">{errors.emailError}</div>

                <label className="form-label">Password</label>
                <input
                    type="password"
                    className={`form-control ${errors.passwordError ? "border-danger" : ""}`}
                    name="password"
                    value={loginForm.password}
                    onChange={handle}
                    placeholder="Password"
                />
                <div className="text-danger">{errors.passwordError}</div>

                <button
                    type="submit"
                    className="btn btn-dark col-4 my-5 text-center mx-auto"
                    disabled={errors.emailError || errors.passwordError || !loginForm.email || !loginForm.password}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
