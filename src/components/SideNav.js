import styled from "styled-components";
const StyleBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 30px;
  & a {
    text-decoration: none;
    color: #1f1d36;
    font-weight: bold;
  }
  & ul {
    list-style-type: none;
    text-decoration: none;
    padding: 20px;
  }
`;
function SideNav() {
  const menus = [
    { to: "/r/All in one", text: "All in one" },
    { to: "/r/Hacker News", text: "Hacker news" },
  ];
  return (
    <StyleBar>
      <ul>
        {menus.map((menu) => (
          <li>
            <a href={menu.to}>{menu.text}</a>
          </li>
        ))}
      </ul>
    </StyleBar>
  );
}

export default SideNav;
