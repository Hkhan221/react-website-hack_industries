import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
    <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to="about">
            About us
        </SidebarLink>
        <SidebarLink to="shop">
            Shop
        </SidebarLink>
         <SidebarLink to="services">
             Services
        </SidebarLink>
        <SidebarLink to="sign up">
            Sign up
        </SidebarLink>
     </SidebarMenu>
     <SideBtnWrap>
     <SidebarRoute to='/signin'>Sign In</SidebarRoute>
     </SideBtnWrap>
    </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar