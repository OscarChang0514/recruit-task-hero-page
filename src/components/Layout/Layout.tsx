import { Outlet } from 'react-router';
import Navbar from '../Navbar';
import { Footer, MainPageBlock } from './Layout.style';

import type { LayoutProps } from './Layout.type';

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Navbar />
      <MainPageBlock>
        <Outlet />
      </MainPageBlock>
      <Footer>created by Oscar</Footer>
    </>
  );
};

export default Layout;
