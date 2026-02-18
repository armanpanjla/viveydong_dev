import { LoginForm } from "../components/Auth/LoginForm"
import { Signupform } from "../components/Auth/SignupForm";

const Authpage =() =>{

    return(
        <div>
            <LoginForm/>
            <Signupform/>
        </div>
    )
}

export default Authpage;