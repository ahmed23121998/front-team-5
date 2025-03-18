import { useState } from "react";

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@%$#*!&])[A-Za-z\d@%$#*!&]{8,}$/;
        return passwordPattern.test(password);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        switch (name) {
            case "name":
                setErrors({ ...errors, name: value ? "" : "Name is required" });
                break;
            case "email":
                setErrors({
                    ...errors,
                    email: value ? (validateEmail(value) ? "" : "Invalid email") : "Email is required",
                });
                break;
            case "password":
                setErrors({
                    ...errors,
                    password: value ? (validatePassword(value) ? "" : "Invalid password") : "Password is required",
                });
                break;
            case "repeatPassword":
                setErrors({
                    ...errors,
                    repeatPassword: value === formData.password ? "" : "Passwords do not match",
                });
                break;
            default:
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.name && !errors.email && !errors.password && !errors.repeatPassword) {
            console.log("Form submitted successfully", formData);
        } else {
            console.log("Fix the errors before submitting");
        }
    };

    return (
        <div className="col-md-10 m-auto col-lg-6 col-xl-5 order-2 order-lg-1">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                    <div className="text-danger">{errors.name}</div>
                </div>
                <div className="mb-4">
                    <label className="form-label">Your Email</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                    <div className="text-danger">{errors.email}</div>
                </div>
                <div className="mb-4">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                    <div className="text-danger">{errors.password}</div>
                </div>
                <div className="mb-4">
                    <label className="form-label">Repeat your password</label>
                    <input type="password" className="form-control" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} required />
                    <div className="text-danger">{errors.repeatPassword}</div>
                </div>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-dark btn-lg">Register</button>
                </div>
            </form>
        </div>
    );
}
export default SignUp;