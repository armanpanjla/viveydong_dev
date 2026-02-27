import { useState } from "react"
import { newUser } from "../../../services/userService";


export const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await newUser(signupData)
            alert(response.data.message)
            setSignupData({
                name: "",
                email: "",
                password: ""
            })
        } catch (error) {
            console.error("Unable to sign you up", error.response?.data)
        }
    }

    return (
        <form className="flex flex-col justify-evenly items-center" onSubmit={handleSubmit}>
            <input  type="text" placeholder="Enter your name" value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} />
            <input  type="email" placeholder="Enter your email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
            <input  type="password" placeholder="Enter your password" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
            <button type="submit">signup</button>
        </form>
    )
}