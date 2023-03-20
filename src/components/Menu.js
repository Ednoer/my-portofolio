import styled from '@emotion/styled'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/icons/ednoer.svg'
import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Nav = styled.nav`
  z-index: 99;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  background-color: #fff !important;

  .nav-lg {
    display: flex;
    padding: 12px 40px;
    align-items: center:
    position: fixed;
    top: 0;
    width: 100%;
  }

  .nav-sm {
    display: none;
    padding: 12px 40px;
    align-items: center:
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: space-between;
  }

  .show > .btn-primary.dropdown-toggle {
    background-color: #404040;
    border-color: #404040;
  }

  @media only screen and (max-width: 768px) {
    .nav-lg {
      display: none;
    }
    .nav-sm {
      display: flex;
    }
  }
`

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
`

const Image = styled.img`
  width: 68px;
  height: auto;
`

const ToggleDropdown = styled(Dropdown.Toggle)`
  border-radius: 2px;
  border-color: #404040;
  color: #525966;
  padding: 6px 12px;
  align-items: center;
  background-color: #f3f3f3;

  &.active {
    border-color: #525966;
    color: #fff !important;
    background-color: #404040;
  }

  &:hover {
    border-color: #525966;
    color: #fff !important;
    background-color: #404040;
  }
`
const MenuDropdown = styled(Dropdown.Menu)`
  border-radius: 2px;
  margin-top: 8px;
  min-width: 270px;
`

const menus = [
  {
    path: '/',
    title: 'Biodata'
  },
  {
    path: '/portofolio',
    title: 'Portofolio'
  }
]

const Menu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Nav>
      <div className="nav-lg">
        <Link to={`/#`} className="link-1">
          <Image src={logo} alt="ednoer" />
        </Link>
        <List>
          {menus.map((menu) => (
            <li
              key={menu.path}
              className={clsx('position-relative', pathname === `${menu.path}` && 'active')}
            >
              {menu.disabled ? <span>{menu.title}</span> : <Link to={menu.path}>{menu.title}</Link>}
            </li>
          ))}
        </List>
      </div>
      <div className="nav-sm">
        <Link to={`/#`} className="link-1">
          <Image src={logo} alt="ednoer" />
        </Link>
        <div>
          <Dropdown>
            <ToggleDropdown>Menu</ToggleDropdown>
            <MenuDropdown alignRight>
              <div class="dropdown-item" onClick={() => navigate("/")}>
                Biodata
              </div>
              <div class="dropdown-item" onClick={() => navigate("/portofolio")}>
                Portofolio
              </div>
            </MenuDropdown>
          </Dropdown>
        </div>
      </div>
    </Nav>
  )
}

export default Menu
