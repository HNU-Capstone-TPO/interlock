import React, { useContext, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import "./MyInfo.css";
import { AuthContext } from "../../contexts/LoggedIn"

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

  const handleSetClick = () => {
    if (stage === 0) {
      setStage(1);
    } else if (stage === 1) {
      setStage(0);
    }
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
        )}
        {stage === 1 && ( <>
        <ListGroup.Item>
          <strong>성별 :</strong> <input></input>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>키 :</strong> <input></input>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>몸무게 :</strong> <input></input>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>연령대 :</strong> <input></input>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>체형 :</strong> <input></input>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>선호 색상 :</strong> <input></input>
        </ListGroup.Item>
        </>
        )}
        </div>
        <button className="myinfo-button" onClick={handleSetClick}>수정</button>
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


