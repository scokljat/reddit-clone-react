import { NavLink } from "react-router-dom";
import Reddit from "../pages/Reddit";
import styled from "styled-components";
const NavStyle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  & li {
    list-style-type: none;
  }
  & a {
    text-decoration: none;
    color: #1f1d36;
    font-weight: bold;
  }
`;
function SideBar() {
  return (
    <NavStyle>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">All in one</NavLink>
            </li>
            <li>
              <NavLink to="/reddit">Reddit</NavLink>
            </li>
            <li>
              <NavLink to="/hn">Hacker News</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </NavStyle>
  );
}

export default SideBar;
