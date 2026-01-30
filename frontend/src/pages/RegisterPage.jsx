
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    })
    const [error, setError] = useState("");
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.username || !formData.email || !formData.password || !formData.confirmpassword) {
            setError("One of the fields are empty")
            return;
        }
        if (formData.password !== formData.confirmpassword) {
            setError("Password do not match")
            return;
        }
        setError("");
        navigate("/loginpage");
    }
    return (
        <div>
            <h2>
                Signup
            </h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={formData.username}
                    onChange={handleChange} />
                <br />
                <input
                    type="text"
                    name="email"
                    placeholder="John@gmail.com"
                    value={formData.email}
                    onChange={handleChange} />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange} />
                <br />
                <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
