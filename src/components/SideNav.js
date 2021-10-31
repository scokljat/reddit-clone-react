function SideNav() {
  const menus = [
    { to: "/r/All in one", text: "All in one" },
    { to: "/r/Hacker News", text: "Hacker news" },
  ];
  return (
    <div>
      <ul>
        {menus.map((menu) => (
          <li>
            <a href={menu.to}>{menu.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
