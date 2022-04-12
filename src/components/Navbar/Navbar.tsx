import { NavItem, StyledNavbar } from './Navbar.style';
import type { NavbarProps } from './Navbar.type';
import routeConfigs from "../../router/route-config";
import { useLocation, useNavigate } from 'react-router';

const Navbar: React.FC<NavbarProps> = (props) => {

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <StyledNavbar>
      <img 
        alt={''} src={'https://blog.hahow.in/content/images/2016/08/Hahow---.png'} 
        style={{maxWidth: '120px', objectFit: 'cover'}} 
      />
      <h1>
        Hahow Recurit /&nbsp;
        <span style={{fontSize: '0.8em', fontWeight: 'normal'}}>Hero Page</span>
      </h1>
      <div style={{flex: 1}} />
      {routeConfigs.map(route =>
        <NavItem 
          key={route.title}
          href={route.path} 
          highLight={location.pathname === route.path}
          onClick={e => {
            e.preventDefault();
            navigate(route.path);
          }}
        >
          {route.title}
        </NavItem>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
