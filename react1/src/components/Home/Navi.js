import React from 'react';

import {
  Sidebar,
  SidebarItem,
} from './NaviStyles';

const Navi = () => {
  return (
    <>
    <Sidebar>
        <SidebarItem to="/mypage/myinfo">● 내 정보</SidebarItem>
        <SidebarItem to="/mypage/timeline">● 타임라인</SidebarItem>
        <SidebarItem to="/mypage/favorites">● 찜 목록</SidebarItem>
        <SidebarItem to="/mypage/interested-products">● 추천 상품</SidebarItem>
    </Sidebar>
    </>
  );
};

export default Navi;



