import { useState } from "react"
import { loginUser } from "../../../services/userService";

export const LoginForm = () => {

    const [loginData, setloginData] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await loginUser(loginData)
            alert(res.data.message);
        } catch (error) {
            console.error("Failed to log in ", error.response?.data);
        }
    };
    return (
        <div>
            <form   onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter Email" value={loginData.email} onChange={(e) => setloginData({ ...loginData, email: e.target.value })} />
                <input type="password" placeholder="Enter password" value={loginData.password} onChange={(e) => setloginData({ ...loginData, password: e.target.value })} />
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}   