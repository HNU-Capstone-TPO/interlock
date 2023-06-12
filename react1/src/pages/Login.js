import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/LoggedIn"
import { IdContext } from "../contexts/Id";
import { SignupContext } from "../contexts/SaveSignup";
import TextField from '@mui/material/TextField';
import { SaveidContext } from "../contexts/SaveId";

const Login = () => {
  const [user1, setUser1] = useState({ id: "", password: "" });
  const [stage, setStage] = useState(1);
  const { saveid, setSaveid} = useContext(SaveidContext);
  const [a, setA] = useState(0);
  const [b, setB] = useState("");
  const authContext = useContext(AuthContext);
  const setIsLoggedIn = authContext.toggleLogin;
  const { id, setId } = useContext(IdContext);
  const { userid, setUserid} = useState("");
  const { signup } = useContext(SignupContext);
  var index;
  const navigate = useNavigate();

  const reset = () => {
    setSaveid([]);
  }

  {/*const handleSave = () => {
    setId((prevId) => {
      const newId = [...prevId, {id: user1.id}];
      return newId;
    })
  }*/}

  

  const handleLogin = () => {

    const storedUser = JSON.parse(localStorage.getItem("signup"));
    console.log(storedUser)

    const handleSaveid = () => {
      setSaveid(() => {
        const newSaveid = [ b ];
        return newSaveid;
      });
    };
    
    
    if (stage === 1) {
      for (var i = 0; i < storedUser.length; i++) {
        if (user1.id === storedUser[i].id1) {
          setStage(2);
          index = i;
          setA(index);
          setB(user1.id);
          console.log(user1.id)
          break;
        } else if (i===storedUser.length-1){
          alert("아이디가 잘못되었습니다.");
        }
      }
    } else {
      if (user1.password === storedUser[a].password1) {
        alert("로그인 성공!");
        setIsLoggedIn();
        handleSaveid();
        navigate("/");
      } else {
        alert("비밀번호가 잘못되었습니다.");
      }
    }
  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser1((prevUser1) => ({ ...prevUser1, [name]: value }));
  };

  

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
      <div style={{border: "1px solid black", borderRadius: "5px", width: "30%", height: "30%", position: "absolute", top: "30%"}}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: "100%", padding: "20px" }}>
          <div className="top" style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start", fontSize: "30px", fontWeight: "bold", marginLeft: "30px"}}>
              <>
              <img 
                src={process.env.PUBLIC_URL + '/img/logo7.png'} 
                alt="Logo"
                style={{ height: '50px'}} />
                <div style={{marginLeft: "10px"}}>
                  <label>로그인</label>
                </div>
              </>
          </div>
          <div className="middle" style={{marginBottom: "0px"}}>
            {stage === 1 && (
              <>
                <TextField 
                  sx={{
                    width: 400
                }}
                id="standard-basic"
                name="id" 
                label="아이디" 
                variant="standard"
                value={user1.id}
                onChange={handleChange}/>
              </>
            )}
            {stage === 2 && (
              <>
                <TextField 
                sx={{
                  width: 400
              }}
                id="standard-basic" 
                name="password"
                label="비밀번호" 
                type="password"
                variant="standard"
                value={user1.password}
                onChange={handleChange}  />
              </>
            )}
          </div>
          <div className="bottom-part" style={{ width: "100%",display: "flex", justifyContent: "flex-end"}}>
            <button onClick={handleLogin} style={{ border: "none", borderRadius: "5px", backgroundColor: "#4242e6", color: "white", width: "100px"}}>{stage === 1 ? 'Next' : 'Log In'}</button>
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default Login;