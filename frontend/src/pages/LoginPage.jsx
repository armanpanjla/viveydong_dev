/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useNavigate } from "react-router-dom"
import {motion} from 'motion/react' 

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
  <motion.div className="flex"
  initial={{ maskImage: "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)" }}
  animate={{ maskImage: "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)" }}
  >
    <form  className="px-4 py-4 bg-purple-300 text-white shadow-amber-400 " onSubmit={handlesubmit}>
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
  </motion.div>
);
};