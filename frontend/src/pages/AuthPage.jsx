import { LoginForm } from "../components/Auth/LoginForm"
import { Signupform } from "../components/Auth/SignupForm";

const Authpage =() =>{

    return(
        <div className="flex justify-around">
            <LoginForm/>
            <Signupform/>
        </div>
    )
}

export default Authpage;