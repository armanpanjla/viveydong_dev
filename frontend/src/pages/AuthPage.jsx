import { useState } from "react";
import { LoginForm } from "../components/Auth/LoginForm"
import { SignupForm } from "../components/Auth/SignupForm";

const AuthPage = () => {

    const [isLogin, isnotLogin] = useState(true)

    return (
        <div>
            <div> {isLogin ? <LoginForm /> : <SignupForm />}
                <div className="flex items-center justify-center"> <button onClick={() => isnotLogin(!isLogin)}>{isLogin ? "Need an account? Sign Up" : "Already have an account? Log In"}</button></div>
            </div>
        </div>
    )
}
export default AuthPage;    