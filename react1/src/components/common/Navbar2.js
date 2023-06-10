import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, LogoWrapper, RightItems } from './NavbarStyles2';
import { AuthContext } from "../../contexts/LoggendIn";

const Navbar2 = () => {

  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  const handleLoginButtonClick = () => {
    toggleLogin();
  };
  return (
    <LogoWrapper>
      <Nav>
      <NavItem exact to="/" activeClassName="active" style={{ marginRight: 'auto', marginLeft: '20%' }}>
          <img 
          src={process.env.PUBLIC_URL + '/img/logo13.png'} 
          alt="Logo"
          style={{ height: '40px'}} />
        </NavItem>
        <RightItems>
        {isLoggedIn ? (
            <>
              <NavItem to="/" onClick={handleLoginButtonClick}>
                로그아웃
              </NavItem>
            </>
          ) : (
            <>
              <NavItem to="/login" activeClassName="active">
                로그인
              </NavItem>
              <NavItem to="/signup" activeClassName="active">
                회원가입
              </NavItem>
            </>
          )}
          <NavItem to="/mypage" activeClassName="active">
            마이 페이지
          </NavItem>
          <NavItem to="userselectitem" activeClassName="active">
              게시판
          </NavItem>
          </RightItems>
          
      </Nav>
    </LogoWrapper>
  );
};

export default Navbar2;