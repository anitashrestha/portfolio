import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { StyledContent } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;

//Our Layout.js component will set our Sidebar and MobileNav components so that we have navigation on every page. 
//It also adds the UserHeader to the top of every page, and we pass our user prop to it. 
//We use the children for the dynamic page content which will be the components passed from the parent page components.