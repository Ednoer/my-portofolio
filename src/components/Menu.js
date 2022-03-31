import styled from '@emotion/styled';
import clsx from 'clsx';
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/icons/ednoer.svg'

const Nav = styled.nav`
  z-index: 99;
  padding: 12px 40px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  background-color: #fff !important;
  position: fixed;
  top: 0;
  width: 100%;
`;

const List = styled.ul`
  margin-bottom: 0;
  margin-right: auto;

  li {
    display: inline-block;
    padding: 0 24px;
    &.active {
      a {
          color: #525966;
          font-weight: 500;
          font-family: 'rubik';
        }
    }
    a {
      text-decoration: none;
      color: #404040;
      font-size: 16px;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;

const Image = styled.img`
  width: 88px;
  height: auto;
`;

const menus = [
  {
    path: '/',
    title: 'Biodata',
  },
  {
    path: '/portofolio',
    title: 'Portofolio',
  },
];

const Menu = () => {
  const { pathname } = useLocation();
  return (
    <Nav> 
      <Link to={`/#`}>
        <Image src={logo} alt="ednoer" />
      </Link>
      <List>
        {menus.map(menu => (
          <li key={menu.path} className={clsx('position-relative', pathname === `${menu.path}` && 'active')}>
            {menu.disabled ? (
              <span>{menu.title}</span>
            ) : <Link to={menu.path}>{menu.title}</Link>}
          </li>
        ))}
      </List>
    </Nav>
  );
};

export default Menu;
