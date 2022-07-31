import "./index.css";

const Nav = (props) => {
  const { activeId, chagetab } = props;
  const onChangeTab = (event) => {
    console.log(event.target.id);
    chagetab(event.target.id);
  };
  return (
    <ul className="nav nav-list">
      <li
        className={activeId === "RESOURCES" ? "active" : "normal"}
        onClick={onChangeTab}
        id="RESOURCES"
      >
        Resources
      </li>
      <li
        className={activeId === "REQUESTS" ? "active" : "normal"}
        onClick={onChangeTab}
        id="REQUESTS"
      >
        Requests
      </li>
      <li
        className={activeId === "USERS" ? "active" : "normal"}
        onClick={onChangeTab}
        id="USERS"
      >
        Users
      </li>
    </ul>
  );
};

export default Nav;
