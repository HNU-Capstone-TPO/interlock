import React, { useContext, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import "./MyInfo.css";
import { AuthContext } from "../../contexts/LoggedIn"
import { IdContext } from '../../contexts/Id';
import { SignupContext } from "../../contexts/SaveSignup";
import { SaveidContext } from "../../contexts/SaveId";

//const {user, setUser} = useContext(user)

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledCard = styled(Card)`
  width: 50%;
  margin: 0 auto;
  margin-top : 100px;
  margin-bottom : 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
`;

const StyledListGroup = styled(ListGroup)`
  .list-group-item {
    border: none;
    padding: 20px;
    height: 80px;
    font-size: 16px;

    &:nth-child(even) {
      background-color: rgba(0, 0, 0, 0.02);
    }
  }
`;

const MyInfo = () => {

  const { isLoggedIn, toggleLogin } = useContext(AuthContext);
  const [stage, setStage] = useState(0);
  const {signup} = useContext(SignupContext);
  const {saveid} = useContext(SaveidContext);
  var index;
  const [a, setA] = useState(0);
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weigh, setWeigh] = useState("");
  const [age, setAge] = useState("");
  const [body, setBody] = useState("");
  const [color, setColor] = useState("");


  const handleSetClick = () => {
    if (stage === 0) {
      setStage(1);
    } else if (stage === 1) {
      setStage(0);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGender((prevSignup) => ({ ...prevSignup, [name]: value }));
  };

  


  const user = {
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '',
    a9: '',
  };

  const user1 = {
    gender: '',
    name: '홍길동',
    email: 'hong@example.com',
    phoneNumber: '010-1234-5678',
    address: '서울특별시 강남구',
  };

  return (
    <StyledCard>
        <div className="myinfo-title">내 정보</div>
      <StyledListGroup variant="flush">
      {isLoggedIn ? (
      <>
      <div>
        {stage === 0 && ( <>
        <ListGroup.Item>
          <strong>성별 :</strong> {signup[a].gender}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>키 :</strong> {signup[a].height}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>몸무게 :</strong> {signup[a].weigh}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>연령대 :</strong> {signup[a].age}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>체형 :</strong> {signup[a].body}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>선호 색상 :</strong> {signup[a].color}
        </ListGroup.Item>
        </>
        )}
        {stage === 1 && ( <>
        <ListGroup.Item>
          <strong>성별 :</strong> <input type="text" placeholder="" value={gender} onChange={(event) => {
          setGender(event.target.value);
          signup[a].gender = event.target.value;
          localStorage.setItem('signup', JSON.stringify(signup));}}/>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>키 :</strong> <input type="text" placeholder="" value={height} onChange={(event) => {
          setHeight(event.target.value);
          signup[a].height = event.target.value;
          localStorage.setItem('signup', JSON.stringify(signup));}}/>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>몸무게 :</strong> <input type="text" placeholder="" value={weigh} onChange={(event) => {
          setWeigh(event.target.value);
          signup[a].weigh = event.target.value;
          localStorage.setItem('signup', JSON.stringify(signup));}}/>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>연령대 :</strong> <input type="text" placeholder="" value={age} onChange={(event) => {
          setAge(event.target.value);
          signup[a].age = event.target.value;
          localStorage.setItem('signup', JSON.stringify(signup));}}/>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>체형 :</strong> <input type="text" placeholder="" value={body} onChange={(event) => {
          setBody(event.target.value);
          signup[a].body = event.target.value;
          localStorage.setItem('signup', JSON.stringify(signup));}}/>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>선호 색상 :</strong> <input type="text" placeholder="" value={color} onChange={(event) => {
          setColor(event.target.value);
          signup[a].color = event.target.value;
          localStorage.setItem('signup', JSON.stringify(signup));}}/>
        </ListGroup.Item>
        </>
        )}
        </div>
        <button className="myinfo-button" onClick={handleSetClick} style={{ display:"flex", justifyContent: "center", alignItems: "center", border: "none", borderRadius: "5px", backgroundColor: "#4242e6", color: "white", width: "50px", height: "40px"}}>수정</button>
      </>
      
      ) : (
        <>
        <ListGroup.Item>
          <strong className="myinfo-width">성별 :</strong> {user.a1}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>키 :</strong> {user.a2}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>몸무게 :</strong> {user.a3}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>연령대 :</strong> {user.a9}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>체형 :</strong> {user.a4}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>선호 색상 :</strong> {user.a7}
        </ListGroup.Item>
        </>
      )
    
    }
      
      </StyledListGroup>
      
    </StyledCard>
  );
};

export default MyInfo;


