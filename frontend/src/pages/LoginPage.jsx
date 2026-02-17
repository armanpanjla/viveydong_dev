import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const navigate = useNavigate();
  const [userdata, setuserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setuserData({ ...userdata, [e.target.name]: e.target.value
  })
}
const handlesubmit = (e) => {
  e.preventDefault();
  setuserData("");
  navigate("/Dashboard")

}
return (
  <div className="bg-indigo-100 flex justify-center m-auto ">
    <form  className="bg-indigo-300 p-16 text-3xl  text-black border-2 shadow-amber-400 " onSubmit={handlesubmit}> 
      <input
        type="email"
        name="email"
        value={userdata.email}
        placeholder="Enter email"
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        value={userdata.password}
        placeholder="Enter password"
        onChange={handleChange}
      />
      <br/>
      <button type="submit">Login</button>
    </form>
  </div>
);
};