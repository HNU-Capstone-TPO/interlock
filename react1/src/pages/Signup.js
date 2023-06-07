import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup= () => {
    const [user, setUser] = useState({ id: "", password: "" });
    const navigate = useNavigate();

    const handleSignup = () => {
        localStorage.setItem("user", JSON.stringify(user));
      navigate('/');
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
      };
  
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>아이디</label>
            <input type="text" name="id" placeholder="ID" value={user.id} onChange={handleChange} />
            <label>비밀번호</label>
            <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
    
            <button onClick={handleSignup}>Sign Up</button>
          </div>
        </div>
      );
  }
export default Signup;